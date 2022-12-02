import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/makeups" className="navbar-item">
          All Makeups
        </Link>
      </div>
      <div className="navbar-end">
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="dropdown navigation"
        >
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-item has-text-white">Explore Further</div>

            <div className="navbar-dropdown">
              <Link to="/makeups/lipstick" className="navbar-item">
                Lipsticks
              </Link>
              <Link to="/makeups/nailpaint" className="navbar-item">
                NailPaints
              </Link>
              <Link to="/makeups/foundation" className="navbar-item">
                Foundations
              </Link>
              <Link to="/makeups/blush" className="navbar-item">
                Blush
              </Link>
              <Link to="/makeups/mascara" className="navbar-item">
                Mascara
              </Link>
              <Link to="/makeups/eyebrow" className="navbar-item">
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
