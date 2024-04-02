import { render } from '@testing-library/react';
import PostingFeed from '@/components/PostingFeed';

describe('PostingFeed component', () => {
  const config = {
    id: 1,
    avatar: 'avatar.jpg',
    username: 'TestUser',
    postedDate: '2024-04-01',
    image: 'image.jpg',
    imageAlt: 'TestUser',
    description: 'Test description',
    comments: [
      { id: "1_1", username: 'User1', comment: 'Comment 1' },
      { id: "1_2", username: 'User2', comment: 'Comment 2' },
    ],
  };

  it('renders username, avatar, and posted date', () => {
    const { getByText, getByAltText } = render(<PostingFeed config={config} />);
    const usernameElement = getByText('TestUser');
    const avatarElement = getByAltText('TestUser');
    const postedDateElement = getByText('2024-04-01');
    
    expect(usernameElement).toBeVisible();
    expect(avatarElement).toBeVisible();
    expect(postedDateElement).toBeVisible();
  });

  it('renders description', () => {
    const { getByText } = render(<PostingFeed config={config} />);
    const descriptionElement = getByText('Test description');
    expect(descriptionElement).toBeVisible();
  });

  it('renders comments and view comments meta', () => {
    const { getByText } = render(<PostingFeed config={config} />);
    const comment1Element = getByText('Comment 1');
    const comment2Element = getByText('Comment 2');
    const viewCommentsElement = getByText('View 2 comments');
    
    expect(comment1Element).toBeVisible();
    expect(comment2Element).toBeVisible();
    expect(viewCommentsElement).toBeVisible();
  });
});