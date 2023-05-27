import * as React from "react";

const navbarLink = {
  color: "#42546E",
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light bg-light-gray">
      <div className="container mx-auto">
        <a className="navbar-brand" href="#">
          <img
            src={require("../images/hausera_logo.png").default}
            width={"140px"}
            height={"38px"}
            alt="hausera log"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-right justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Propiedades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Comunidad
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ES
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Spanish
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="btn wallet_btn">Wallet</button>
            </li>
            <li className="nav-item">
              <img src={require("../images/avatar.png").default} alt="avatar" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
