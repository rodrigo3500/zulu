import {
  Card,
  CardContent,
  CardHeader,
  Image,
  CardMeta,
  Icon,
} from "semantic-ui-react";
import { GuestInterface } from "@/typescriptInterfaces/guest";
interface IProps {
  config: GuestInterface;
}
const Guest = ({ config }: IProps) => {
  return (
    <Card fluid>
      <CardContent>
        <CardHeader>
          <Image
            src={config.avatar}
            alt={config.avatarAlt}
            avatar
            className="float-left mt-2"
          />
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <span className="d-block mr-4">{config.name}</span>
              <CardMeta className="d-block font-weight-normal">
                <Icon corner name="download" color="green" />
                <span>{config.uploadCount}</span>
                <Icon corner name="heart" color="red" />
                <span>{config.likeCount}</span>
                <Icon corner name="comment" color="blue" />
                <span>{config.commentCount}</span>
              </CardMeta>
            </div>
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default Guest;
