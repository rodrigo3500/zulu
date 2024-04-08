import Guest from "@/components/Guest";
import { Container, Header, Menu, Button } from "semantic-ui-react";

const Guests = () => {
  const guests = [
    {
      id: 1,
      avatar: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      avatarAlt: "guest avatar alt",
      name: "Jason",
      uploadCount: 1,
      likeCount: 3,
      commentCount: 4,
    },
    {
        id: 2,
        avatar: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        avatarAlt: "guest avatar alt",
        name: "Jason 2",
        uploadCount: 4,
        likeCount: 3,
        commentCount: 12,
      },
  ];
  return (
    <Container>
      <Menu fixed="top" pointing className="p-4">
        <Header size="huge" className="ml-4">
          1 Guests
        </Header>
        <Button icon="plus" color="orange" className="ms-auto" />
      </Menu>
      {guests.map((guest) => (
        <Guest config={guest} key={guest.id} />
      ))}
    </Container>
  );
};

export default Guests;
