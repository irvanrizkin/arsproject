
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Product } from './components/Product';
import { Quotes } from './components/Quotes';
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Product/>
      <Quotes/>
    </div>
  );
}

export default App;
