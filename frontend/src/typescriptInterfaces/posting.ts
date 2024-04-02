export type IPostingList = IPosting[];
export interface IPosting {
  id: number;
  image: string,
  imageAlt: string,
  username: string,
  postedDate: string,
  avatar: string,
  description: string,
  comments: IPostingComment[],
}

interface IPostingComment {
  username: string,
  comment: string
}