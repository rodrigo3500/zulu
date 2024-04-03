import { render } from '@testing-library/react';
import MenuBar from '@/components/Menu';

describe('MenuBar component', () => {
  const menuItems = [
    { id: 1, name: 'List View', menuIcon: 'list icon' },
    { id: 2, name: 'Grid View', menuIcon: 'grid icon' },
    { id: 3, name: 'Settings', menuIcon: 'settings icon' }
  ];

  it('renders menu items correctly', () => {
    const { getByText } = render(<MenuBar menuItems={menuItems} onStateChange={() => {}} />);

    // Check if menu items are rendered correctly
    menuItems.forEach(item => {
      expect(getByText(item.menuIcon)).toBeVisible();
    });
  });
});
