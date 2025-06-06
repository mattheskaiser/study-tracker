import Image from "next/image";

import { TextAtom } from "@/components/atoms/Text.atom";
import { LanguageSelectMolecule } from "@/components/molecules/LanguageSelect.molecule";

export const NavbarMolecule = () => {
  return (
    <div className="sticky top-0 left-0 z-20 h-16 border-b bg-white shadow-xl">
      <div className="container mx-auto flex justify-between px-6">
        <div className="flex h-16 flex-row items-center gap-x-4">
          <div className="relative size-10">
            <Image
              src={"/study-tracker-logo.jpg"}
              alt="Study Tracker Logo"
              className="object-cover"
              fill
            />
          </div>
          <TextAtom size="large" isBold>
            Study Tracker
          </TextAtom>
        </div>
        <div className="flex h-16 items-center">
          <LanguageSelectMolecule />
        </div>
      </div>
    </div>
  );
};
