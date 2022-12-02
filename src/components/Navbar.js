import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar is-dark is-one-quarter-desktop is-one-third-tablet is-mobile">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-danger">
          Home
        </Link>
        <Link to="/makeups" className="navbar-item has-text-danger">
          All Makeups
        </Link>
      </div>
      <div className="navbar-end">
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="dropdown navigation"
        >
          <div className="navbar-item has-dropdown is-hoverable is-mobile">
            <Link to="/" className="navbar-link has-text-danger">
              Explore Further
            </Link>
            <div className="navbar-dropdown">
              <Link
                to="/makeups/lipstick"
                className="navbar-item has-text-danger"
              >
                Lipsticks
              </Link>
              <Link
                to="/makeups/nailpaint"
                className="navbar-item has-text-danger"
              >
                Nail Polish
              </Link>
              <Link
                to="/makeups/foundation"
                className="navbar-item has-text-danger"
              >
                Foundations
              </Link>
              <Link to="/makeups/blush" className="navbar-item has-text-danger">
                Blush
              </Link>
              <Link
                to="/makeups/mascara"
                className="navbar-item has-text-danger"
              >
                Mascara
              </Link>
              <Link
                to="/makeups/eyebrow"
                className="navbar-item has-text-danger"
              >
                Eyebrow
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nav>
);

export default Navbar;
