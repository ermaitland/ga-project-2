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
        <Link to="/makeups/lipstick" className="navbar-item">
          Lipsticks
        </Link>
        <Link to="/makeups/nailpaint" className="navbar-item">
          NailPaints
        </Link>
        <Link to="/makeups/foundation" className="navbar-item">
          Foundations
        </Link>
        <Link to="/makeups/mascara" className="navbar-item">
          Mascara
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
