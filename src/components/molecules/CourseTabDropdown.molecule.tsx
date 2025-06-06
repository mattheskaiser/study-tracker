"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/hooks/useTranslation.hook";

export const CourseTabDropdownMolecule = ({
  setEditAction,
  deleteAction,
}: {
  setEditAction: () => void;
  deleteAction: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const translate = useTranslation();
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[200px]">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={setEditAction}>
            {
              translate.courseManagerCard.courseListOrganism.courseTabOrganism
                .dropdown.edit
            }
          </DropdownMenuItem>
          <DropdownMenuItem onClick={deleteAction} className="text-red-600">
            {
              translate.courseManagerCard.courseListOrganism.courseTabOrganism
                .dropdown.delete
            }
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
