
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
