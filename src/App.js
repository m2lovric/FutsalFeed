import React from 'react';

import Header from './components/Header/Header';
import News from './components/News/News';
import Newsletter from './components/Newsletter/Newsletter';
import OtherNews from './components/OtherNews/OtherNews';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Footer from './components/Footer/Footer';

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
