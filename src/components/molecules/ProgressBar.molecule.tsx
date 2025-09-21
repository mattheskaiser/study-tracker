import { Progress } from "@/components/ui/progress";

export const ProgressBarMolecule = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <Progress 
        value={value} 
        className="h-3 bg-gray-200"
      />
    </div>
  );
};
