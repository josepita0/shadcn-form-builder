import { IconDots } from "@tabler/icons-react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "d4t-ui-demo";
import { ReactNode } from "react";

interface Props {
  actions: {
    label: string;
    hidden?: boolean;
    icon?: ReactNode;
    onClick: () => void;
  }[];
}

export const DropdownTable = ({ actions }: Props) => {
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <IconDots className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>

          <DropdownMenuSeparator />

          {actions.map(({ label, icon, onClick, hidden }) => (
            <DropdownMenuItem
              className={hidden ? "hidden" : ""}
              key={label}
              onClick={onClick}
            >
              {icon && <div className="mr-2">{icon}</div>}
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
