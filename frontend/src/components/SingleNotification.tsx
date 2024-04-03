import { Image, CardMeta, Icon, IconGroup } from "semantic-ui-react";
import { Notification } from "@/typescriptInterfaces/notification";
import { useEffect, useState } from "react";
interface IProps {
  config: Notification;
}

const SingleNotification = ({ config }: IProps) => {
  const [eventString, setEventString] = useState("");
  const [eventIcon, setEventIcon] = useState("");
  const [eventIconColor, setEventIconColor] = useState("");

  useEffect(() => {
    switch (config.action) {
      case "comment":
        setEventString(`says: ${config.description}`);
        setEventIcon("comment");
        setEventIconColor("blue");
        break;
      case "like":
        setEventString("liked this photo");
        setEventIcon("heart");
        setEventIconColor("red");
        break;
      case "upload":
        setEventString("shared this photo");
        setEventIcon("upload");
        setEventIconColor("green");
        break;
      default:
        break;
    }
  }, [config.action, config.description]); // Empty dependency array

  return (
    <>
      <Image src={config.avatar} avatar className="float-left mt-2" />
      <div className="d-flex align-items-center">
        <div className="flex-grow-1">
          <span className="d-block">
            <span className="font-weight-bold">{config.username}</span>{" "}
            {eventString}
          </span>
          <CardMeta className="d-block">{config.postedDate}</CardMeta>
        </div>
        <IconGroup size="big">
          <Image src={config.image} size="mini" />
          <Icon corner name={eventIcon as never} color={eventIconColor as never} />
        </IconGroup>
      </div>
    </>
  );
};

export default SingleNotification;
