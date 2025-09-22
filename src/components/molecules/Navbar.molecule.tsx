import Image from "next/image";

import { LanguageSelectMolecule } from "@/components/molecules/LanguageSelect.molecule";

export const NavbarMolecule = () => {
  return (
    <div className="sticky top-0 left-0 z-20 h-16 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 flex-row items-center gap-x-4">
          <div className="relative size-10 rounded-lg overflow-hidden">
            <Image
              src={"/study-tracker-logo.jpg"}
              alt="Study Tracker Logo"
              className="object-cover"
              fill
            />
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            Study Tracker
          </h1>
        </div>
        <div className="flex h-16 items-center">
          <LanguageSelectMolecule />
        </div>
      </div>
    </div>
  );
};
