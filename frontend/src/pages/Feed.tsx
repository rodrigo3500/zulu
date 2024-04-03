import PostingFeed from "@/components/PostingFeed";
import { IPostingList } from "@/typescriptInterfaces/posting";
const Feed = () => {
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
  return (
    <>
      {config.map((config) => (
        <PostingFeed key={config.id} config={config} />
      ))}
    </>
  );
};

export default Feed;
