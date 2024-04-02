export type IPostingList = IPosting[];
export interface IPosting {
  id: number;
  image: string;
  imageAlt: string;
  username: string;
  postedDate: string;
  avatar: string;
  description: string;
  comments: IPostingComment[];
}

interface IPostingComment {
  id: string,
  username: string;
  comment: string;
}
