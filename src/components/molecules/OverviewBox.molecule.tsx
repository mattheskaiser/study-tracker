import { TextAtom } from "@/components/atoms/Text.atom";

type OverviewBoxTypes = {
  boxes: {
    label: string;
    value: string;
  }[];
};

export const OverviewBoxMolecule = ({ boxes }: OverviewBoxTypes) => {
  return boxes.map((box) => (
    <div
      className="flex flex-row justify-between rounded-xl border p-2"
      key={box.label}
    >
      <TextAtom size="small" className="flex items-center">
        {box.label}
      </TextAtom>
      <TextAtom size="small" isBold className="flex items-center pr-6">
        {box.value === null || box.value === undefined || box.value === "0"
          ? "N/A"
          : box.value}
      </TextAtom>
    </div>
  ));
};
