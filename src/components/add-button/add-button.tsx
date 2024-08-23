"use client";

import { Button } from "../ui/button";

import { IconCirclePlus } from "@tabler/icons-react";

interface IProps {
  onClick?: () => void;
  title?: string;
}
export const AddButton = ({ onClick, title }: IProps) => {
  return (
    <Button
      onClick={() => onClick()}
      type="button"
      className="flex justify-between shadow-md !bg-[#3DA35A] dark:text-white items-center whitespace-nowrap "
    >
      <IconCirclePlus className="h-5 w-5 mr-2 dark:text-white" />
      {title}
    </Button>
  );
};
