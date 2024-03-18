import { Route, Routes } from 'react-router-dom';
import { Coba } from './components/Coba';
import { Home } from './components/Home';
import { PageAbout} from './Pages/PageAbout';
import { PageContact } from './Pages/PageContact';

function App() {
  return (
    <div className="App">
      <Coba/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<PageAbout/>}></Route>
        <Route path='/contact' element={<PageContact/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
