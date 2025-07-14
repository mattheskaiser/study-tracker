import { PrismaClient as PrismaClientPostgres } from '@prisma/client'
import { PrismaClient as PrismaClientSQLite } from '@prisma/client'

async function main() {
  // Connect to both databases
  const sqliteClient = new PrismaClientSQLite({
    datasources: {
      db: {
        url: 'file:./prisma/dev.db'
      }
    }
  })

  const postgresClient = new PrismaClientPostgres()

  try {
    // Migrate users
    const users = await sqliteClient.user.findMany()
    for (const user of users) {
      await postgresClient.user.create({
        data: {
          id: user.id,
          email: user.email
        }
      })
    }
    console.log(`Migrated ${users.length} users`)

    // Migrate courses
    const courses = await sqliteClient.course.findMany()
    for (const course of courses) {
      await postgresClient.course.create({
        data: {
          id: course.id,
          name: course.name,
          semester: course.semester,
          status: course.status,
          grade: course.grade,
          userId: course.userId
        }
      })
    }
    console.log(`Migrated ${courses.length} courses`)

  } catch (error) {
    console.error('Error during migration:', error)
  } finally {
    await sqliteClient.$disconnect()
    await postgresClient.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  }) 