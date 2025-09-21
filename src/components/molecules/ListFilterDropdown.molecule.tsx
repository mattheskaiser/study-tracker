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
import { useTranslation } from "@/hooks/useTranslation.hook";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const ListFilterDropdownMolecule = () => {
  const [open, setOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useQueryState("statusFilter");
  const translation = useTranslation();
  const translation = useTranslation();

  const setStatus = (status: "open" | "inProgress" | "done") => {
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
            <DropdownMenuSubTrigger>
              {translation.courseManagerCard.courseListOrganism.filterByStatus}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-0">
              <DropdownMenuItem onClick={() => setStatus("open")}>
                <div className="flex w-full flex-row items-center justify-between">
                  <TextAtom size="small">
                    {translation.courseManagerCard.courseListOrganism.courseTabOrganism.courseStatusOpen}
                  </TextAtom>
                  {statusFilter === "open" && <Check />}
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus("inProgress")}>
                <div className="flex w-full flex-row items-center justify-between">
                  <TextAtom size="small">
                    {translation.courseManagerCard.courseListOrganism.courseTabOrganism.courseStatusInProgress}
                  </TextAtom>
                  {statusFilter === "inProgress" && <Check />}
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus("done")}>
                <div className="flex w-full flex-row items-center justify-between">
                  <TextAtom size="small">
                    {translation.courseManagerCard.courseListOrganism.courseTabOrganism.courseStatusDone}
                  </TextAtom>
                  {statusFilter === "done" && <Check />}
                </div>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
