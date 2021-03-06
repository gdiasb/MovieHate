import './navbar.style.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand fw-bolder ms-lg-5">
          MovieHate
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link my-auto">
              <i className="fa-brands fa-github-alt fa-2xl"></i>
              <span className="me-2 ms-1 me-lg-5">
                @gdiasb
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
