import type { ReactNode } from "react";

import { ButtonAtom } from "@/components/atoms/Button.atom";

type ViewTabProps = {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
};

export const ViewTabMolecule = ({ active, onClick, icon, label }: ViewTabProps) => {
  return (
    <ButtonAtom
      onPress={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors duration-200 ${
        active
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {icon}
      {label}
    </ButtonAtom>
  );
};