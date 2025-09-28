import { TextAtom } from "@/components/atoms/Text.atom";
import { ProgressBarMolecule } from "@/components/molecules/statistics/ProgressBar.molecule";

type OverviewBoxTypes = {
  boxes: {
    label: string;
    value: string;
    isProgressBar?: boolean;
  }[];
};

export const OverviewBoxMolecule = ({ boxes }: OverviewBoxTypes) => {
  const progressBox = boxes.find((box) => box.isProgressBar);
  const statBoxes = boxes.filter((box) => !box.isProgressBar);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {statBoxes.map((box) => (
          <div
            className="rounded-lg border border-gray-200 bg-white p-3 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
            key={box.label}
          >
            <div className="mb-1 text-lg font-semibold text-gray-900">
              {box.value === null ||
              box.value === undefined ||
              box.value === "0"
                ? "—"
                : box.value}
            </div>
            <TextAtom size="small" className="font-medium text-gray-600">
              {box.label}
            </TextAtom>
          </div>
        ))}
      </div>

      {progressBox && (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-2 flex items-center justify-between">
            <TextAtom size="small" className="font-medium text-gray-600">
              {progressBox.label}
            </TextAtom>
            <span className="text-lg font-semibold text-gray-900">
              {parseInt(progressBox.value).toFixed(1)}%
            </span>
          </div>
          <ProgressBarMolecule value={parseInt(progressBox.value)} />
        </div>
      )}
    </div>
  );
};
