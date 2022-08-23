import { Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 10px;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
