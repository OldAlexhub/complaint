import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="navbar-logo">⚡</span> AI Nexus
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Complaint Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/analysis">
                  Analysis
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <style jsx="true">{`
        .navbar {
          font-family: "Roboto", sans-serif;
          background: #1a1a1a;
          border-bottom: 2px solid #0ff;
        }

        .navbar-logo {
          font-size: 1.5rem;
          color: #0ff;
        }

        .nav-link {
          color: #fff;
          transition: all 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: #0ff;
          text-shadow: 0px 0px 8px #0ff;
        }

        .navbar-toggler {
          border-color: #0ff;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </>
  );
};

export default Layout;
