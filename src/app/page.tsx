"use client";

import { AccountFinderOrganism } from "@/components/organisms/AccountFinder.organism";
import { CourseManagerOrganism } from "@/components/organisms/CourseManager.organism";
import { OverviewOrganism } from "@/components/organisms/Overview.organism";

const Home = () => {
  return (
    <div className="no-scrollbar container mx-auto min-h-screen w-full overflow-x-hidden overflow-y-scroll">
      <div className="flex flex-col gap-y-6 px-6">
        <AccountFinderOrganism />
        <div className="flex flex-col gap-6 lg:flex-row">
          <CourseManagerOrganism className="order-2 lg:order-1" />
          <OverviewOrganism />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
