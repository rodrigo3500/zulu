import { render } from '@testing-library/react';
import TopMenu from '@/components/TopMenu';

describe('MenuBar component', () => {
  const menuItems = [
    { id: 1, name: 'List View', menuIcon: 'list icon' },
    { id: 2, name: 'Grid View', menuIcon: 'grid icon' },
    { id: 3, name: 'Settings', menuIcon: 'settings icon' }
  ];

  const headerContent = {
    groom: "Jason",
    bride: "Nosaj",
    date: "01/04/2024",
    albumPhoto: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  };

  it('renders menu items correctly', () => {
    const { getByText } = render(<TopMenu menuItems={menuItems} onStateChange={() => {}} headerContent={headerContent} />);

    // Check if menu items are rendered correctly
    menuItems.forEach(item => {
      expect(getByText(item.menuIcon)).toBeVisible();
    });
  });
});
