import {
  Menu,
  MenuItem,
  Container,
  CardHeader,
  CardContent,
  Card,
  Button,
  Icon,
} from "semantic-ui-react";
import { MenuList, HeaderContent } from "@/typescriptInterfaces/menu";
import { useEffect, useState } from "react";
import "@/css/Menu.css";
interface IProps {
  menuItems: MenuList;
  onStateChange: (menuState: string) => void;
  headerContent: HeaderContent;
}

const MenuBar = ({ menuItems, onStateChange, headerContent }: IProps) => {
  const [activeItem, setActiveItem] = useState("List View");
  useEffect(() => {
    onStateChange(activeItem);
  }, [activeItem, onStateChange]);

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  const backgroundImage = `url(${headerContent.albumPhoto})`;
  return (
    <Menu fixed="top" widths={3} className="d-flex flex-column" pointing>
      <Container
        style={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
      >
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent>
            <CardHeader textAlign="left" className="text-white text-outline">
              {headerContent.groom} & {headerContent.bride}
            </CardHeader>
            <CardHeader
              textAlign="left"
              className="mt-2 text-white text-outline"
            >
              {headerContent.date}
            </CardHeader>
          </CardContent>
        </Card>
        <div>
          <Button
            color="orange"
            icon
            labelPosition="left"
            rounded
            className="float-left"
          >
            <Icon name="plus" />
            Add Guests
          </Button>
          <Button icon="cloud download" className="float-right" />
          <Button icon="setting" className="float-right" />
        </div>
      </Container>
      <Container className="flex-row">
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
      </Container>
    </Menu>
  );
};

export default MenuBar;
