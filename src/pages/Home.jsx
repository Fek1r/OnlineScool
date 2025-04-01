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
          <img src="/img/student.png" alt="Student" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <img src="/img/stats.png" alt="Stats" className="stats-img" />
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="veiks">
          <img src="/img/veiksmiga.png" alt="Veiksmiga" />
        </div>

        <div className="cards">
          <div className="card-large">
            <img src="/img/atestats.png" alt="Atestāts" />
          </div>
          <div className="card">
            <img src="/img/macija.png" alt="Grafiks" />
          </div>
          <div className="card-large">
            <img src="/img/world.png" alt="Pasaule" />
          </div>
          <div className="card">
            <img src="/img/skolotaja.png" alt="Skolotājs" />
          </div>
        </div>

        <div className="join-block">
          <img src="/img/pievenojes.png" alt="Join us" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-overlay">
          <div className="cta-text">
            <div className="badge">🎉 Jaungada atlaide! -25% pirmajam semestrim!</div>
            <h1>
              Izmēģini pirmo semestri
              <br />
              <span>ar atlaidi -25%</span>
            </h1>
            <p>
              Izmanto Jaungada atlaidi un unikālu iespēju iziet divu klašu programmu vienā mācību gadā!
              Aizpildi reģistrācijas formu.
            </p>
          </div>
          <form className="cta-form">
            <input type="text" placeholder="Vārds" />
            <div className="phone-wrapper">
              <span className="flag">🇱🇻</span>
              <input type="tel" placeholder="+371..." />
            </div>
            <input type="email" placeholder="E-pasts" />
            <button type="submit">Izmēģināt</button>
            <small>
              Nospiežot pogu, es piekrītu <a href="#">personas datu apstrādei</a>.
            </small>
          </form>
        </div>
      </section>

      {/* Learning Style */}
      <section className="learning">
        <img src="/img/" alt="" />
        <div className="learning-columns">
          <div className="learning-box purple">
            <img src="/img/learn.png" alt="Learning" />
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
      <form className="ai-floating-form">
        <input type="text" placeholder="Uzrakstiet savu jautājumu..." />
        <button type="submit">Nosūtīt</button>
      </form>
    </section>
    </div>
  );
};

export default Home;
