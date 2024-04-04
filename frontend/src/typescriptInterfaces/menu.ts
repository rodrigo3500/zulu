import { ReactNode } from "react";

interface MenuItem {
  id: number;
  name: string;
  menuIcon: ReactNode;
}
export type MenuList = MenuItem[];
export interface HeaderContent {
  groom: string;
  bride: string;
  date: string;
  albumPhoto: string;
}
