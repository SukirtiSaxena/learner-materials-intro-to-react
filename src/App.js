import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import CindyClawford from './components/CindyClawford.js';
import MissPurrfect from './components/MissPurrfect.js';
import Gwumpy from './components/Gwumpy.js';
import ElTaco from './components/ElTaco.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <main>
        <div className="cards__wrapper">
          <CindyClawford />
          <MissPurrfect />
          <ElTaco />
          <Gwumpy />
        </div>
      </main>

      <Footer />

    </>
  );
}

export default App;
