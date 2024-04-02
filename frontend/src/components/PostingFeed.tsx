import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import "@/css/PostingFeed.css";

import { IPosting } from "@/typescriptInterfaces/posting";

interface IProps {
  config: IPosting;
}

const PostingFeed = ({ config }: IProps) => {
  return (
    <Card fluid>
      <CardContent>
        <CardHeader>
          <Image src={config.avatar} avatar className="float-left" />
          <span className="float-left mt-2">{config.username}</span>
          <span className="float-right mt-2 font-weight-normal">
            {config.postedDate}
          </span>
        </CardHeader>
      </CardContent>
      <Image src={config.image} alt={config.imageAlt} />
      <CardContent>
        <Icon size="big" name="heart outline" color="red" />
        <Icon size="big" name="comment outline" />
        <CardDescription>{config.description}</CardDescription>
      </CardContent>
      <CardContent>
        {config.comments.map((comment) => (
          <CardDescription key={comment.id}>
            <span className="font-weight-bold">{comment.username}</span>{" "}
            {comment.comment}
          </CardDescription>
        ))}
        <CardMeta>View {config.comments.length} comments</CardMeta>
      </CardContent>
    </Card>
  );
};

export default PostingFeed;
