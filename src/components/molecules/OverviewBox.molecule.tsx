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
  return (
    <div className="space-y-4">
      {boxes.map((box) => (
        <div
          className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          key={box.label}
        >
          <div className="flex items-center justify-between">
            <TextAtom
              size="small"
              className="text-gray-600 font-medium"
            >
              {box.label}
            </TextAtom>

            {!box.isProgressBar && (
              <div className="text-2xl font-bold text-gray-900">
                {box.value === null || box.value === undefined || box.value === "0"
                  ? "—"
                  : box.value}
              </div>
            )}
          </div>

          {box.isProgressBar && (
            <div className="mt-3 space-y-2">
              <ProgressBarMolecule value={parseInt(box.value)} />
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">
                  {parseInt(box.value).toFixed(1)}%
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
