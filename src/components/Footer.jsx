import React from "react";
import "./Layout.css";

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="logo">ЛОГОТИП</div>
          </div>
  
          <div>
            <h4>Navigācija</h4>
            <div className="footer1-links">
              <ul>
                <li><a href="/">Galvenā lapa</a></li>
                <li><a href="/educ">Kā notiek mācības?</a></li>
                <li><a href="/teach">Skolotāji</a></li>
                <li><a href="/contact">Kontakti</a></li>
              </ul>
            </div>
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
            <h4>Darba laiks</h4>
            <p>
                Darba dienas 9.00–17.00<br />
                Brīvdienās – krājam spēkus
            </p>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div>LV ⌄</div>
          <div className="footer-links">
            <a href="/#">Sīkdatņu politika</a>
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
  