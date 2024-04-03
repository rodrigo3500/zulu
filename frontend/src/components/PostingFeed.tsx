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
          <Image src={config.avatar} avatar className="float-left mt-2" />
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <span className="d-block">{config.username}</span>
              <CardMeta className="d-block font-weight-normal">
                {config.postedDate}
              </CardMeta>
            </div>
            <Icon
              name="ellipsis horizontal"
              className="d-block float-right"
              size="large"
            />
          </div>
        </CardHeader>
      </CardContent>
      <Image src={config.image} alt={config.imageAlt} />
      <CardContent>
        <Icon size="big" name="heart outline" />
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
