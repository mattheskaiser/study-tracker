"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AccountFinderCardOrganism } from "@/components/organisms/AccountFinderCard.organism";
import { CourseManagerCardOrganism } from "@/components/organisms/CourseManagerCard.organism";
import { OverviewCardOrganism } from "@/components/organisms/OverviewCard.organism";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="no-scrollbar container mx-auto min-h-screen w-full overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-col gap-y-6 px-6">
          <AccountFinderCardOrganism />
          <div className="flex flex-col gap-6 lg:flex-row">
            <CourseManagerCardOrganism />
            <OverviewCardOrganism />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
