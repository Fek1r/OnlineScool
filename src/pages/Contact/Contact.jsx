import React from 'react';
import './Contact.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api'; //npm install @react-google-maps/api


const MapComponent = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
  };

  const center = {
    lat: 56.946,
    lng: 24.1059,
  };

  return (
    <div className="map-wrapper">
      <LoadScript googleMapsApiKey="AIzaSyDaTAS_u-4SxZOKn9gIsqdWNRrMaPkMsBc">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <section className="form-place">
        <div className="form-section">
          <img src="/img_contact/info_contact.png" alt="title" />
          <form className="modern-form1">
            <h2>Aizpildi formu un uzzini, vai klasē ir brīvas vietas</h2>
            <input type="text" placeholder="Vārds" />
            <div className="phone-input1">
              <div className="flag-select1">🇱🇻 <span className="arrow1">▾</span></div>
              <input type="tel" placeholder="+371..." />
            </div>
            <input type="email" placeholder="E-pasts" />
            <input className="input_message" type="text" placeholder="Enter your Message" />
            <button type="submit">Izmēģināt</button>
            <small>
              Nospiežot pogu, es piekrītu <a href="#">personas datu apstrādei</a>.
            </small>
          </form>
        </div>
      </section>

      <section className="map-section">
        <MapComponent />
      </section>
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

export default Contact;
