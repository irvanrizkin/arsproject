
import { About } from './components/About';
import { Coba } from './components/Coba';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Product } from './components/Product';
import { Quotes } from './components/Quotes';
import { TestNavbar } from './components/TestNavbar';
import './index.css'

function App() {
  return (
    <div className="App">
      <Coba/>
      {/* <TestNavbar/> */}
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Portfolio/>
      <Product/>
      <Quotes/>
    </div>
  );
}

export default App;
