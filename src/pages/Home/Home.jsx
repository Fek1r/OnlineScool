import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Jaungada atlaide! -25%</span>
          <h1>
            Mācies viegli un brīvi, kad un kur <span className="highlight">vien vēlies!</span>
          </h1>
          <p>
            Aizmirsti par garlaicīgām stundām! Ar mums ir viegli saprasties, patīkami mācīties un ļoti laipni katru dienu. Skola, kas vienmēr ir ar Tevi!
          </p>
          <div className="hero-buttons">
            <button className="primary">Sākt tagad</button>
            <button className="ghost">Kā tas darbojas?</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img_home/student.png" alt="Student" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <img src="/img_home/stats.png" alt="Stats" className="stats-img" />
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="veiks">
          <img src="/img_home/veiksmiga.png" alt="Veiksmiga" />
        </div>

        <div className="cards">
          <div className="card-large">
            <img src="/img_home/atestats.png" alt="Atestāts" />
          </div>
          <div className="card">
            <img src="/img_home/macija.png" alt="Grafiks" />
          </div>
          <div className="card-large">
            <img src="/img_home/world.png" alt="Pasaule" />
          </div>
          <div className="card">
            <img src="/img_home/skolotaja.png" alt="Skolotājs" />
          </div>
        </div>

        <div className="join-block">
          <img src="/img_home/pievenojes.png" alt="Join us" />
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

export default Home;
