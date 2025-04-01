import React from 'react';
import './Pay.css';

const Pay = () => {
  return (
    <div className="pay">
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
