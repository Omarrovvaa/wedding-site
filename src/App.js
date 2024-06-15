import React from 'react';
import './App.css';
import Header from './components/Header';
import Invitation from './components/Invitation';
import DateSection from './components/DateSection';
import LocationSection from './components/LocationSection';
import FinalSection from './components/FinalSection';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Invitation />
      <DateSection />
      <LocationSection />
      <FinalSection/>
     
    </div>
  );
};

export default App;
