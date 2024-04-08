import { useState } from "react";
import { Segment, Icon, Button } from "semantic-ui-react";
import { MenuList, HeaderContent } from "@/typescriptInterfaces/menu";
import TopMenu from "@/components/TopMenu";
import BottomMenu from "@/components/BottomMenu";
import FeedGrid from "@/pages/FeedGrid";
import Notifications from "@/pages/Notifications";
import Feed from "@/pages/Feed";
import "@/css/App.css";
import Guests from "@/pages/Guests";

function App() {
  // top menu
  const topMenuItems: MenuList = [
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
  const headerContent: HeaderContent = {
    groom: "Jason",
    bride: "Nosaj",
    date: "01/04/2024",
    albumPhoto: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  };

  const [topMenuState, setTopMenuState] = useState("List View");

  const handleTopMenuChange = (message: string) => {
    setTopMenuState(message);
  };

  // bottom menu
  const bottomMenuItems: MenuList = [
    {
      id: 1,
      name: "Home",
      menuIcon: <Icon name="home" size="big" />,
    },
    {
      id: 2,
      name: "Guests",
      menuIcon: <Icon name="group" size="big" />,
    },
    {
      id: 3,
      name: "Camera",
      menuIcon: (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "170px",
            zIndex: "1000",
          }}
        >
          <Button color="blue" circular icon size="massive">
            <Icon name="plus" />
          </Button>
        </div>
      ),
    },
    {
      id: 4,
      name: "Website",
      menuIcon: <Icon name="internet explorer" size="big" />,
    },
    {
      id: 5,
      name: "Profile",
      menuIcon: <Icon name="user" size="big" />,
    },
  ];

  const [bottomMenuState, setBottomMenuState] = useState("Home");

  const handleBottomMenuChange = (message: string) => {
    setBottomMenuState(message);
  };

  return (
    <>
      <div className="app-container">
        <Segment className="over">
          {bottomMenuState === "Home" && (
            <TopMenu
              menuItems={topMenuItems}
              onStateChange={handleTopMenuChange}
              headerContent={headerContent}
            />
          )}
          {bottomMenuState === "Home" && (
            <div>
              <div className="big-margin">
                {topMenuState === "List View" && <Feed />}
              </div>

              <div className="big-margin">
                {topMenuState === "Grid View" && <FeedGrid />}
              </div>

              <div className="big-margin">
                {topMenuState === "Notifications" && <Notifications />}
              </div>
            </div>
          )}

          {bottomMenuState === "Guests" && (
            <div className="medium-margin">
              {topMenuState === "List View" && <Guests />}
            </div>
          )}

          <BottomMenu
            menuItems={bottomMenuItems}
            onStateChange={handleBottomMenuChange}
          />
        </Segment>
      </div>
    </>
  );
}

export default App;
