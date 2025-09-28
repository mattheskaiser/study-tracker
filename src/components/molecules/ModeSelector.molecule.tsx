import type { ReactNode } from "react";
import { LogIn, UserPlus } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";

type ModeTabProps = {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
};

const ModeTab = ({ active, onClick, icon, label }: ModeTabProps) => {
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

type ModeSelectorProps = {
  isNewUser: boolean;
  onModeChange: (isNewUser: boolean) => void;
  searchLabel: string;
  createLabel: string;
};

export const ModeSelectorMolecule = ({
  isNewUser,
  onModeChange,
  searchLabel,
  createLabel,
}: ModeSelectorProps) => {
  return (
    <div className="flex gap-2">
      <ModeTab
        active={!isNewUser}
        onClick={() => onModeChange(false)}
        icon={<LogIn className="h-4 w-4" />}
        label={searchLabel}
      />
      <ModeTab
        active={isNewUser}
        onClick={() => onModeChange(true)}
        icon={<UserPlus className="h-4 w-4" />}
        label={createLabel}
      />
    </div>
  );
};