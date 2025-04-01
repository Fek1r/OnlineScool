import React from 'react';
import './Teach.css';

const Teach = () => {
  return (
    <div className="teach">
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

      {/* Learning Style */}
      <section className="learning">
        <div className="learning-columns">
            <div className = "mac-logo">
                <img src="/img_home/mac.png" alt="Macamies" />
            </div>
          <div className="learning-box">
            <img src="/img_home/learn.png" alt="Learning" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Biežākie jautājumi</h2>
        <details>
          <summary>Kas ir programma “Divas klases vienā gadā”?</summary>
          <p>Tā ir intensīvāka programma ar paātrinātu mācību plānu.</p>
        </details>
        <details>
          <summary>Kam ir piemērota šī programma?</summary>
          <p>Skolēniem, kas vēlas iet ātrāk vai pārkārtot savas mācības.</p>
        </details>
        <details>
          <summary>Kādas priekšrocības dod šī programma?</summary>
          <p>Ātrāks diploms, vairāk brīvības, mazāk stresa.</p>
        </details>
      </section>

      {/* AI Helper */}
      <section className="ai-full-bg">
        <div className = "margin">
            <form className="ai-floating-form">
            <input type="text" placeholder="Uzrakstiet savu jautājumu..." />
            <button type="submit">Nosūtīt</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Teach;