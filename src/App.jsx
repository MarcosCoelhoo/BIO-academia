import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <main>
        <About />
      </main>
    </>
  );
}

export default App;
