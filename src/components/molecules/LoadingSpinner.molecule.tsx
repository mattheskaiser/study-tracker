import Image from "next/image";

type SpinnerMoleculeProps = {
  size?: number;
  color: "black" | "white";
};

export const LoadingSpinnerMolecule = ({
  size = 24,
  color,
}: SpinnerMoleculeProps) => {
  return (
    <div className={`relative size-[${size}px]`}>
      <Image
        fill
        src={color === "white" ? "/spinner-white.gif" : "/spinner-black.gif"}
        alt="loading spinner"
        className="object-cover"
      />
    </div>
  );
};
