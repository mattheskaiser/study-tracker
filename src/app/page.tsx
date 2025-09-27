"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useQueryState } from "nuqs";

import { AccountFinderCardOrganism } from "@/components/organisms/AccountFinderCard.organism";
import { CourseListCardOrganism } from "@/components/organisms/CourseListCard.organism";
import { CreateCourseCardOrganism } from "@/components/organisms/CreateCourseCard.organism";
import { OverviewCardOrganism } from "@/components/organisms/OverviewCard.organism";
import { queryClient } from "@/lib/react-query";

const Home = () => {
  const [userId] = useQueryState("userId");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <AccountFinderCardOrganism />
            </div>

            {userId && (
              <>
                <div className="animate-in fade-in grid grid-cols-1 gap-6 duration-900 lg:grid-cols-2">
                  <CreateCourseCardOrganism />
                  <OverviewCardOrganism />
                </div>

                <div className="animate-in fade-in duration-700">
                  <CourseListCardOrganism />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
