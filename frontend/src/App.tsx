import { Segment } from "semantic-ui-react";
import Card from "@/components/Card";
import { IPostingList } from "@/typescriptInterfaces/posting";
import "@/css/App.css";

function App() {
  const config: IPostingList = [
    {
      id: 1,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      username: "Jason",
      postedDate: "1h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "Wedding photo #1",
      comments: [
        {
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
        {
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
      ],
    },
    {
      id: 2,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      username: "Jason",
      postedDate: "1h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "Wedding photo #2",
      comments: [
        {
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
        {
          username: "Jason",
          comment:
            "Long comment made by a bot that is meant to span multiple lines",
        },
      ],
    },
  ];
  return (
    <>
      <div className="app-container">
        <Segment className="over">
          {config.map((config) => (
            <Card config={config} />
          ))}
        </Segment>
      </div>
    </>
  );
}

export default App;
