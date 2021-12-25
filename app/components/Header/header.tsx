import { Add } from 'iconsax-react';
import { Link, useLocation } from 'remix';
import { HeaderContainer, HeaderTitle, AddNodeButton } from './header.style';

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <HeaderTitle>Remix Note</HeaderTitle>
      {location.pathname !== '/new' && (
        <AddNodeButton>Take a Note</AddNodeButton>
      )}
    </HeaderContainer>
  );
};
