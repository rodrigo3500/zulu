export type NotificationList = Notification[];
export interface Notification {
  id: number;
  image: string;
  imageAlt: string;
  username: string;
  postedDate: string;
  avatar: string;
  description: string;
  action: string
}