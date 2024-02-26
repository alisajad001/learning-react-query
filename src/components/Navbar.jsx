import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Learn React Query</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cat-fact">Cat Fact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
