import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Jaungada atlaide! -25%</span>
          <h1>Mācies viegli un brīvi, kad un kur <span className="highlight">vien vēlies!</span></h1>
          <p>Aizmirsti par garlaicīgām stundām! Ar mums ir viegli saprasties, patīkami mācīties un ļoti laipni katru dienu. Skola, kas vienmēr ir ar Tevi!</p>
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

      {/* Benefits Section with images */}
      <section className="benefits">

        <div className = "veiks">
            <img src="/img/veiksmiga.png" alt="Veiksmiga" />
        </div>
        
        <div className="cards">
            <div className="card-large">
                <img src="/img/atestats.png" alt="Atestāts" />
            </div>
            <div className="card card">
                <img src="/img/macija.png" alt="Grafiks" />
            </div>
            <div className="card card-large">
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
        <div className="cta-text">
          <h2>Izmēģini pirmo semestri ar atlaidi <span>-25%</span></h2>
          <p>Izmanto Jaungada atlaidi un unikālu iespēju iziet divu klašu programmu vienā mācību gadā!</p>
        </div>
        <form className="cta-form">
          <input type="text" placeholder="Vārds" />
          <input type="text" placeholder="Telefons" />
          <input type="email" placeholder="E-pasts" />
          <button type="submit">Izmēģināt</button>
        </form>
      </section>

      {/* Learning Style */}
      <section className="learning">
        <h2>Mācīties ar mums ir <span className="highlight">vienkārši un mierīgi</span></h2>
        <div className="learning-columns">
          <div className="learning-box purple">
            <h3>Kā mēs panākam vieglu mācīšanos?</h3>
            <ul>
              <li>Izņemam no programmas visu lieko</li>
              <li>Izveidojam mācību materiālus, kas ir viegli uztverami</li>
              <li>Sarežģītas tēmas tiek izskaidrotas vienkārši</li>
              <li>Interaktīvi uzdevumi un spēles</li>
              <li>Regulāri atjaunojam materiālus</li>
              <li>Sniedzam iespēju mācīties savā tempā</li>
            </ul>
          </div>
          <div className="learning-box yellow">
            <h3>Kā mēs panākam mierīgu mācīšanos?</h3>
            <ul>
              <li>Neizsaucam pie tāfeles — bez stresa</li>
              <li>Nesteidzinām — katrs mācās savā tempā</li>
              <li>Nekad nepārmetam par kļūdām</li>
              <li>Draudzīga un saprotoša atmosfēra</li>
              <li>Cieņa pret skolēniem un vecākiem</li>
              <li>Atbalsts un pozitīvs mācību klimats</li>
            </ul>
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

      {/* AI Palīgs */}
      <section className="ai-helper">
        <h3>Vai Jums ir vēl kādi jautājumi?</h3>
        <p><strong>Jūsu personīgais palīgs par mācību jautājumiem!</strong></p>
        <input type="text" placeholder="Uzdodiet savu jautājumu..." />
        <button>Nosūtīt</button>
      </section>
    </div>
  );
};

export default Home;