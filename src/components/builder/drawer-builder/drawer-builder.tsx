"use client";

import { IconSquareX } from "@tabler/icons-react";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  Drawer,
  DrawerTitle,
} from "../../ui/drawer";

import { cn } from "../../../lib/utils";
import { useDesktop } from "../../../lib/hooks/useMediaQuery";
import { useDrawerStore } from "../../../lib/stores/useDrawerStore";

interface IProps {
  width?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const baseClass =
  "sm:w-[500px] sm:h-screen sm:top-0 sm:right-0 left-auto mt-0 rounded-none dark:bg-black";

export const DrawerBuilder = ({
  onClose,
  children,
  width = "sm:w-[500px]",
}: IProps) => {
  const { toggleDrawer, dataDrawer, isOpen } = useDrawerStore();

  const isDesktop = useDesktop();

  return (
    <Drawer
      direction={isDesktop ? "right" : "bottom"}
      dismissible={false}
      open={isOpen}
    >
      <DrawerContent className={width}>
        <div className="mx-auto w-full pt-0 p-4">
          <DrawerHeader>
            <div className="flex flex-col justify-end items-end">
              <DrawerClose asChild>
                <IconSquareX
                  onClick={() => {
                    toggleDrawer();

                    onClose && onClose();
                  }}
                  size={30}
                  className="cursor-pointer dark:hover:text-white hover:text-black text-gray-400"
                />
              </DrawerClose>

              <div className="w-full flex flex-col items-start space-y-2 mt-4">
                <DrawerTitle>{dataDrawer?.title || "Drawer"}</DrawerTitle>

                <DrawerDescription>
                  {dataDrawer?.description || "Drawer"}
                </DrawerDescription>
              </div>
            </div>

            <div
              className={cn(
                "overflow-auto p-1 mt-5",
                isDesktop ? "h-[calc(100vh-150px)]" : "h-[calc(100vh-300px)]"
              )}
            >
              {children}
            </div>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
