import React from 'react';
import './Pay.css';

const Pay = () => {
  return (
    <div className="pay">
      <section className = "sale">
        <div className = "sale-section">
            <img src="/img_pay/sale.png" alt="sale" />
            <button className="sale-button"> Izmēģiniet</button>
        </div>
      </section>

      <section className = "price">
        <div className = "price-text">
          <img src = "/img_pay/CikMaksa.png" alt = "Cik Maksa"/>
        </div>
       <div className = "price-section">
        <div className="price-blue">
            <img src="/img_pay/CenaBlue.png" alt="Blue Price" />
            <button className="price-button-blue"> Izmēģiniet</button>
        </div>
        <div className = "price-red">
          <img src = "/img_pay/CenaRed.png" alt = "Red Price"/>
          <button className="price-button-red"> Izmēģiniet</button>
        </div>
       </div>
      </section>

      <section className="ai-full-bg">
        <div className = "margin">
            <form className="ai-floating-form">
            <input type="text" placeholder="Uzrakstiet savu jautājumu..." />
            <button type="submit">Nosūtīt</button>
        </form>
      </div>
    </section>
      {/* Call to Action */}
      <section className="cta">
        <form className="modern-form">
          <h2>Aizpildi formu un uzzini, vai klasē ir brīvas vietas</h2>

          <input type="text" placeholder="Vārds" />

          <div className="phone-input">
            <div className="flag-select">
              🇱🇻 <span className="arrow">▾</span>
            </div>
            <input type="tel" placeholder="+371..." />
          </div>

          <input type="email" placeholder="E-pasts" />

          <button type="submit">Izmēģināt</button>

          <small>
            Nospiežot pogu, es piekrītu{' '}
            <a href="#">personas datu apstrādei</a>.
          </small>
        </form>
      </section>
    </div> 
  );
};

export default Pay;
