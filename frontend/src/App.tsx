import { Segment, Icon } from "semantic-ui-react";
import PostingFeed from "@/components/PostingFeed";
import MenuBar from "@/components/Menu";
import PostingGrid from "@/components/PostingGrid";
import Notifications from "@/pages/Notifications";
import { IPostingList } from "@/typescriptInterfaces/posting";
import { MenuList } from "@/typescriptInterfaces/menu";
import "@/css/App.css";
import { useState } from "react";

function App() {
  const config: IPostingList = [
    {
      id: 1,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      imageAlt: "Foo",
      username: "Jason",
      postedDate: "1h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "Wedding photo #1",
      comments: [
        {
          id: "1_1",
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
        {
          id: "1_2",
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
      ],
    },
    {
      id: 2,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      imageAlt: "Foo2",
      username: "Jason",
      postedDate: "1h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "Wedding photo #2",
      comments: [
        {
          id: "2_1",
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
        {
          id: "2_2",
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
      ],
    },
  ];

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

  const gridItems: string[] = [
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  ]

  const [menuState, setMenuState] = useState("List View");

  const handleMenuChange = (message: string) => {
    setMenuState(message);
  };

  return (
    <>
      <div className="app-container">
        <Segment className="over">
          <MenuBar menuItems={menuItems} onStateChange={handleMenuChange} />
          <div className="big-margin">
            {menuState === "List View" &&
              config.map((config) => (
                <PostingFeed key={config.id} config={config} />
              ))}
          </div>

          <div className="big-margin">
            {menuState === "Grid View" && <PostingGrid gridItems={gridItems} />}
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
