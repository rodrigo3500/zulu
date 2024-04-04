import { useState } from "react";
import { Segment, Icon } from "semantic-ui-react";
import { MenuList, HeaderContent } from "@/typescriptInterfaces/menu";
import MenuBar from "@/components/Menu";
import FeedGrid from "@/pages/FeedGrid";
import Notifications from "@/pages/Notifications";
import Feed from "@/pages/Feed";
import "@/css/App.css";

function App() {
  const menuItems: MenuList = [
    {
      id: 1,
      name: "List View",
      menuIcon: <Icon name="list" size="big" />,
    },
    {
      id: 2,
      name: "Grid View",
      menuIcon: <Icon name="grid layout" size="big" />,
    },
    {
      id: 3,
      name: "Notifications",
      menuIcon: <Icon name="bell outline" size="big" />,
    },
  ];

  const [menuState, setMenuState] = useState("List View");

  const handleMenuChange = (message: string) => {
    setMenuState(message);
  };

  const headerContent: HeaderContent = {
    groom: "Jason",
    bride: "Nosaj",
    date: "01/04/2024",
    albumPhoto: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  };

  return (
    <>
      <div className="app-container">
        <Segment className="over">
          <MenuBar
            menuItems={menuItems}
            onStateChange={handleMenuChange}
            headerContent={headerContent}
          />
          <div className="big-margin">
            {menuState === "List View" && <Feed />}
          </div>

          <div className="big-margin">
            {menuState === "Grid View" && <FeedGrid />}
          </div>

          <div className="big-margin">
            {menuState === "Notifications" && <Notifications />}
          </div>
        </Segment>
      </div>
    </>
  );
}

export default App;
