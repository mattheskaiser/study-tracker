import { Trash } from "lucide-react";

import { ButtonAtom } from "@/components/atoms/Button.atom";

export const DeleteButtonMolecule = ({ onPress }: { onPress: () => void }) => {
  return (
    <div className="hover:cursor-pointer">
      <ButtonAtom isIconOnly icon={<Trash />} onPress={onPress} />
    </div>
  );
};
