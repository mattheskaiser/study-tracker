"use client";
import { QueryClientProvider } from "@tanstack/react-query";

import { AccountFinderCardOrganism } from "@/components/organisms/AccountFinderCard.organism";
import { CourseListCardOrganism } from "@/components/organisms/CourseListCard.organism";
import { CreateCourseCardOrganism } from "@/components/organisms/CreateCourseCard.organism";
import { OverviewCardOrganism } from "@/components/organisms/OverviewCard.organism";
import { queryClient } from "@/lib/react-query";

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <AccountFinderCardOrganism />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-6">
              <CreateCourseCardOrganism />
              <OverviewCardOrganism />
            </div>

            <div className="lg:col-span-8">
              <CourseListCardOrganism />
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
