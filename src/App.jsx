import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Instructors from './components/instructors/Instructors';
import Pricing from './components/pricing/Pricing';
import Workouts from './components/workouts/Workouts';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <About />
        <Workouts />
        <Instructors />
        <Pricing />
      </main>
    </>
  );
}

export default App;
