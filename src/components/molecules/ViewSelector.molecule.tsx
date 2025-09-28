import { Calendar, LayoutGrid } from "lucide-react";

import { ViewTabMolecule } from "@/components/molecules/ViewTab.molecule";

type ViewSelectorProps = {
  activeView: "status" | "semester";
  onViewChange: (view: "status" | "semester") => void;
  statusLabel: string;
  semesterLabel: string;
};

export const ViewSelectorMolecule = ({
  activeView,
  onViewChange,
  statusLabel,
  semesterLabel,
}: ViewSelectorProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <ViewTabMolecule
          active={activeView === "status"}
          onClick={() => onViewChange("status")}
          icon={<LayoutGrid className="h-4 w-4" />}
          label={statusLabel}
        />
        <ViewTabMolecule
          active={activeView === "semester"}
          onClick={() => onViewChange("semester")}
          icon={<Calendar className="h-4 w-4" />}
          label={semesterLabel}
        />
      </div>
    </div>
  );
};