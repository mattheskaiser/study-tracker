import { LogOut, User } from "lucide-react";
import { toast } from "sonner";

import { ButtonAtom } from "@/components/atoms/Button.atom";
import { TextAtom } from "@/components/atoms/Text.atom";

type LoggedInUserProps = {
  userEmail: string;
  onSignOut: () => void;
};

export const LoggedInUserMolecule = ({ userEmail, onSignOut }: LoggedInUserProps) => {
  const handleSignOut = () => {
    toast("Signed out successfully", {
      dismissible: true,
      position: "top-center",
    });
    onSignOut();
  };

  return (
    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
      <div className="flex items-center gap-3">
        <User className="h-5 w-5 text-green-600" />
        <div className="flex flex-col">
          <TextAtom size="small" className="text-green-800 font-medium">
            Logged in as
          </TextAtom>
          <TextAtom size="small" className="text-green-700">
            {userEmail}
          </TextAtom>
        </div>
      </div>
      
      <ButtonAtom
        onPress={handleSignOut}
        className="bg-gray-900 hover:bg-gray-800 text-white"
      >
        <LogOut strokeWidth={2} className="h-4 w-4" />
      </ButtonAtom>
    </div>
  );
};