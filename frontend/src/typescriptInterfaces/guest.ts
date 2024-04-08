export interface GuestInterface {
  id: number;
  avatar: string,
  avatarAlt: string,
  name: string;
  uploadCount: number,
  likeCount: number,
  commentCount: number
}
export type GuestList = GuestInterface[];
