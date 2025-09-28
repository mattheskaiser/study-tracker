import type { ReactNode } from "react";

import { TextAtom } from "@/components/atoms/Text.atom";

type EmptyStateAtomProps = {
  icon: ReactNode;
  message: string;
};

export const EmptyStateAtom = ({ icon, message }: EmptyStateAtomProps) => {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-4 h-12 w-12 text-gray-400">{icon}</div>
      <TextAtom size="small" color="warning">
        {message}
      </TextAtom>
    </div>
  );
};
