import { useState } from "react";
import { Check, SlidersHorizontal } from "lucide-react";
import { useQueryState } from "nuqs";

import { TextAtom } from "@/components/atoms/Text.atom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ListFilterDropdownMolecule = () => {
  const [open, setOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useQueryState("statusFilter");

  const setStatus = (status: "open" | "inProgress" | "closed") => {
    if (statusFilter != status || null) void setStatusFilter(status);
    if (statusFilter === status) void setStatusFilter(null);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button>
          <SlidersHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[200px]">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Nach Status filtern</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-0">
              <DropdownMenuItem onClick={() => setStatus("open")}>
                <div className="flex w-full flex-row items-center justify-between">
                  <TextAtom size="small">Offen</TextAtom>
                  {statusFilter === "open" && <Check />}
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus("inProgress")}>
                <div className="flex w-full flex-row items-center justify-between">
                  <TextAtom size="small">In Bearbeitung</TextAtom>
                  {statusFilter === "inProgress" && <Check />}
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus("closed")}>
                <div className="flex w-full flex-row items-center justify-between">
                  <TextAtom size="small">Abgeschlossen</TextAtom>
                  {statusFilter === "closed" && <Check />}
                </div>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
