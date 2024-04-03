import { render } from '@testing-library/react';
import PostingGrid from '@/components/PostingGrid';

describe('PostingGrid component', () => {
  it('renders grid items correctly', () => {
    const gridItems = [
      'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      'https://react.semantic-ui.com/images/avatar/large/matthew.png'
    ];

    const { getAllByAltText } = render(<PostingGrid gridItems={gridItems} />);

    // Check if all grid items are rendered
    const images = getAllByAltText(''); // Assuming the alt text is empty for the images
    expect(images).toHaveLength(gridItems.length);

    // Check if each image has the correct src attribute
    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', gridItems[index]);
    });
  });
});
