import { TextAtom } from "@/components/atoms/Text.atom";
import { ProgressBarMolecule } from "@/components/molecules/ProgressBar.molecule";

type OverviewBoxTypes = {
  boxes: {
    label: string;
    value: string;
    isProgressBar?: boolean;
  }[];
};

export const OverviewBoxMolecule = ({ boxes }: OverviewBoxTypes) => {
  const progressBox = boxes.find(box => box.isProgressBar);
  const statBoxes = boxes.filter(box => !box.isProgressBar);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {statBoxes.map((box) => (
          <div
            className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            key={box.label}
          >
            <div className="text-lg font-semibold text-gray-900 mb-1">
              {box.value === null || box.value === undefined || box.value === "0"
                ? "—"
                : box.value}
            </div>
            <TextAtom
              size="small"
              className="text-gray-600 font-medium"
            >
              {box.label}
            </TextAtom>
          </div>
        ))}
      </div>

      {progressBox && (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-2">
            <TextAtom
              size="small"
              className="text-gray-600 font-medium"
            >
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
