import { ReactNode } from 'react';

interface MenuItem {
  id: number,
  name: string;
  menuIcon: ReactNode,
}
export type MenuList = MenuItem[]
