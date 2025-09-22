# Study Tracker

A modern web application for tracking academic progress, built with Next.js, TypeScript, and Prisma.

## Features

- **Multi-language Support**: Available in English, German, and Spanish
- **Course Management**: Add, edit, and delete courses with grades and status tracking
- **Progress Overview**: Visual progress tracking and grade statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Dynamic course status and grade management

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: TanStack Query, Nuqs for URL state
- **Forms**: React Hook Form with Zod validation
- **Internationalization**: Custom translation system

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local` and configure your database URL

3. **Set up the database**:
   ```bash
   npm run prisma:migrate
   npm run prisma:generate
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:migrate` - Run database migrations

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components (atomic design)
│   ├── atoms/          # Basic UI elements
│   ├── molecules/      # Composite components
│   ├── organisms/      # Complex components
│   └── ui/             # Shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── schemas/            # Zod validation schemas
├── translations/       # Internationalization files
└── types/              # TypeScript type definitions
```
