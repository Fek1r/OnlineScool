import React from "react";
import "./Layout.css";

// ========== Header ==========
export const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="logo">ЛОГОТИП</div>
          </div>
  
          <div>
            <h4>Navigācija</h4>
            <ul>
              <li>Galvenā lapa</li>
              <li>Kā notiek mācības?</li>
              <li>Skolotāji</li>
              <li>Kontakti</li>
            </ul>
          </div>
  
          <div>
            <h4>Adrese</h4>
            <p>
              Tālmācības vidusskola "Nosaukums"<br />
              Baznīcas iela 15, 1. stāvs, Rīga
            </p>
          </div>
  
          <div>
            <h4>Kontakti</h4>
            <p>+371 01 234 281</p>
            <p>Email: skola@website.lv</p>
          </div>
  
          <div>
            <h4>Время работы</h4>
            <p>
              Рабочие дни 9.00–17.00<br />
              Выходные - набираемся сил
            </p>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div>RU ⌄</div>
          <div className="footer-links">
            <a href="#">Sīkdatņu politika</a>
            <a href="#">Privātuma politika</a>
            <a href="#">Lietošanas noteikumi</a>
          </div>
        </div>
  
        <div className="copyright">
          2025 © Visas tiesības aizsargātas
        </div>
      </footer>
    );
  };
  export default Footer;
  