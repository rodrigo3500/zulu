import SingleNotification from "@/components/SingleNotification";
import { NotificationList } from "@/typescriptInterfaces/notification";
const Notification = () => {
  const notifs: NotificationList = [
    {
      id: 1,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      imageAlt: "Foo",
      username: "Jason",
      postedDate: "1h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "Wedding photo #1",
      action: "comment",
    },
    {
      id: 2,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      imageAlt: "Foo",
      username: "Jason",
      postedDate: "2h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "",
      action: "like",
    },
    {
      id: 3,
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      imageAlt: "Foo",
      username: "Jason",
      postedDate: "3h ago",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      description: "",
      action: "upload",
    },
  ];
  return (
    <>
      {notifs.map((notif) => (
        <SingleNotification key={notif.id} config={notif} />
      ))}
    </>
  );
};

export default Notification;
