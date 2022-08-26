import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { LoaderSpiner } from 'components/common/Loader/Loader';

const Header = styled.header`
margin-bottom: 20px;
 padding: 20px 40px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);

`; 

const StyledLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  color: black;
  margin-right: 10px;

  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movie">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<LoaderSpiner/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
