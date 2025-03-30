"use client";

import { Plus } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";

const Home = () => {
  return (
    <div className="no-scrollbar container mx-auto min-h-screen w-full overflow-x-hidden overflow-y-scroll">
      <div className="flex flex-col">
        <div className="h-32 bg-red-500"></div>
        <div className="flex flex-row gap-x-6">
          <div className="h-96 w-[70%] bg-green-500">
            <ButtonAtom
              label="Kurs hinzufügen"
              startContent={<Plus />}
              onPress={() => alert("Pressed")}
            />
          </div>
          <div className="h-96 w-[30%] bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
