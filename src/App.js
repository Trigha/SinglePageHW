import './App.css';
import Header from '../src/components/header';
import Hero from '../src/components/hero';
import Events from '../src/components/events';
import Features from './components/features';
import Teams from './components/teams';
import Sponsors from './components/sponsors';
import Footers from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Events />
      <Features />
      <Teams />
      <Sponsors />
      <Footers />
    </div>
  );
}

export default App;
