"use client";

import { AccountFinderOrganism } from "@/components/organisms/AccountFinder.organism";
import { CourseManagerOrganism } from "@/components/organisms/CourseManager.organism";
import { OverviewOrganism } from "@/components/organisms/Overview.organism";

const Home = () => {
  return (
    <div className="no-scrollbar container mx-auto min-h-screen w-full overflow-x-hidden overflow-y-scroll">
      <div className="mt-8 flex flex-col gap-y-8 px-6">
        <AccountFinderOrganism />
        <div className="flex flex-row gap-x-6">
          <CourseManagerOrganism />
          <OverviewOrganism />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
