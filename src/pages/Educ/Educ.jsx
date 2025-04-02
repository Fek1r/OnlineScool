import React from 'react';
import './Educ.css';

const Educ = () => {
  return (
    <div className="educ">
   
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

export default Educ;