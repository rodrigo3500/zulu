import { Menu, MenuItem } from "semantic-ui-react";
import { MenuList } from "@/typescriptInterfaces/menu";
import { useEffect, useState } from "react";

interface IProps {
  menuItems: MenuList;
  onStateChange: (menuState: string) => void;
}

const MenuBar = ({ menuItems, onStateChange }: IProps) => {
  const [activeItem, setActiveItem] = useState("List View");
  useEffect(() => {
    onStateChange(activeItem);
  }, [activeItem, onStateChange]);

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };
  return (
    <Menu fixed="top" widths={3}>
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
