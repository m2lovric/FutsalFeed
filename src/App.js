import React from 'react';

import Header from './components/Header';
import News from './components/News';
import Newsletter from './components/Newsletter';
import OtherNews from './components/OtherNews';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Newsletter />
      <OtherNews />
      <SocialMedia />
      <OtherNews />
      <Footer />
    </div>
  );
}

export default App;
