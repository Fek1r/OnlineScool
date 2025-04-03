import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home/Home';
import Pay from './pages/Pay/Pay';
import Teach from './pages/Teach/Teach';
import Educ from './pages/Educ/Educ';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/teach" element={<Teach />} />
          <Route path="/educ" element={<Educ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;