import { render } from '@testing-library/react';
import SingleNotification from '@/components/SingleNotification';

describe('SingleNotification component', () => {
  const notification = {
    id: 1,
    avatar: 'avatar.jpg',
    username: 'John Doe',
    description: 'Some description',
    postedDate: '2022-04-01',
    action: 'comment',
    image: 'image.jpg',
    imageAlt: ''
  };

  it('renders notification correctly', () => {
    const { getByText, getByAltText } = render(<SingleNotification config={notification} />);

    // Check if username, description, and postedDate are rendered correctly
    expect(getByText('John Doe')).toBeVisible();
    expect(getByText('says: Some description')).toBeVisible();
    expect(getByText('2022-04-01')).toBeVisible();

    // Check if avatar and image are rendered correctly
    expect(getByAltText('')).toHaveAttribute('src', 'avatar.jpg');
    expect(getByAltText('')).toHaveAttribute('src', 'image.jpg');

    // Check if icon is rendered correctly
    expect(getByAltText('comment')).toBeVisible(); // Assuming icon alt text is set to the icon name
    expect(getByAltText('comment')).toHaveAttribute('src', 'comment.png'); // Assuming icon src is set correctly
    expect(getByAltText('comment')).toHaveStyle('color: blue'); // Assuming icon color is set correctly
  });
});
