import { TextAtom } from "@/components/atoms/Text.atom";
import { ProgressBarMolecule } from "@/components/molecules/ProgressBar.molecule";
import { cn } from "@/lib/utils";

type OverviewBoxTypes = {
  boxes: {
    label: string;
    value: string;
    isProgressBar?: boolean;
  }[];
};

export const OverviewBoxMolecule = ({ boxes }: OverviewBoxTypes) => {
  return boxes.map((box) => (
    <div
      className={cn("flex flex-row justify-between rounded-xl border p-2", {
        "flex-col gap-y-2": box.isProgressBar,
      })}
      key={box.label}
    >
      <TextAtom size="small" className="flex items-center">
        {box.label}
      </TextAtom>
      {box.isProgressBar ? (
        <div className="flex flex-col gap-y-2">
          <ProgressBarMolecule value={parseInt(box.value)} />
          <div className="-mt-11 mr-5 mb-4 text-end text-sm font-bold">
            {parseInt(box.value).toFixed(1)}%
          </div>
        </div>
      ) : (
        <TextAtom size="small" isBold className="flex items-center pr-6">
          {box.value === null || box.value === undefined || box.value === "0"
            ? "N/A"
            : box.value}
        </TextAtom>
      )}
    </div>
  ));
};
