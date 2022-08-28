import { NavLink, useLocation } from 'react-router-dom';

const MoviesDetailsAction = () => {
  const location = useLocation().state?.from;
  return (
    <ul>
      <li>
        <NavLink to={'credits'} state={{ from: location }}>
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink to={'reviews'} state={{ from: location }}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default MoviesDetailsAction;
