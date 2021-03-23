import "./header.css";
import logo from "../../images/logo.svg";

export default function Navbar() {
  return (
    <header className="py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="EasyBank Landing Page" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Careers</a>
              </li>
            </ul>
            <a href="#" className="btn-main">Request Invite</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
