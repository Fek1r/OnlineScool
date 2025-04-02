import React from "react";
import "./Layout.css";

// ========== Header ==========
export const Header = () => {
  return (
    <header className="header">
      {/* Top Banner */}
      <div className="top-banner">
        Jaungada atlaide! -25% pirmajam semestrim!{' '}
        <a href="#" className="top-banner-link">
          Uzzini vairāk
        </a>
      </div>

      {/* Main Nav */}
      <div className="main-nav">
        <div className="logo">ЛОГОТИП</div>

        <nav className="nav-links">
          <a className="nav-button" href = "/">Galvenā lapa</a>
          <a href="">Par mums</a>
          <a href="educ">Izglītība</a>
          <a href="teach">Skolotāji</a>
          <a href="pay">Par apmaksu</a>
          <a href="#">Kontakti</a>
          <div className="lang-select">LV ⌄</div>
          <button className="try-button">Izmēģināt</button>
        </nav>
      </div>
    </header>
  );
};
export default Header;