import Image from "next/image";

import { TextAtom } from "@/components/atoms/Text.atom";

export const NavbarMolecule = () => {
  return (
    <div className="h-16 border-b shadow-xl">
      <div className="container mx-auto flex h-full flex-row items-center gap-x-4 px-6">
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
    </div>
  );
};
