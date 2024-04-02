import { Menu, MenuItem } from "semantic-ui-react";
import { MenuList } from "@/typescriptInterfaces/menu";
import { useState } from "react";

interface IProps {
  menuItems: MenuList;
  onStateChange: (menuState: string) => void;
}

const MenuBar = ({ menuItems, onStateChange }: IProps) => {
  const [activeItem, setActiveItem] = useState("List View");

  const handleItemClick = (name: string) => {
    setActiveItem(name);
    onStateChange(name);
  };
  return (
    <Menu fixed="top">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          index={item.id}
          name={item.name}
          active={activeItem === item.name}
          onClick={() => handleItemClick(item.name)}
        >
          {item.menuIcon}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MenuBar;
