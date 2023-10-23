import React from 'react';
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Instructors from './components/instructors/Instructors';
import Location from './components/location/Location';
import Pricing from './components/pricing/Pricing';
import Time from './components/time/Time';
import Workouts from './components/workouts/Workouts';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 100,
      // startEvent: 'load',
    });
  }, []);

  return (
    <>
      <Header />

      <Hero />

      <main>
        <About />
        <Workouts />
        <Instructors />
        <Pricing />
        <Location />
        <Time />
      </main>

      <Footer />
    </>
  );
}

export default App;
