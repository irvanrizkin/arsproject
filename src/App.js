import { Route, Routes } from 'react-router-dom';
import { Coba } from './components/components/Coba';
import { Home } from './components/components/Home';
import { PageAbout} from './Pages/PageAbout';
import { PageContact } from './Pages/PageContact';
import { NotFound } from './components/components/NotFound';
import { PageProduct } from './Pages/PageProduct';
import { Automotive } from './components/PageProducts/Automotive';
import { Industrial } from './components/PageProducts/Industrial';
import { Grease } from './components/PageProducts/Grease';

function App() {
  return (
    <div className="App">
      <Coba/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<PageAbout/>}></Route>
        <Route path='/contact' element={<PageContact/>}></Route>
        <Route path='/product' element={<PageProduct/>}></Route>
        <Route path='/automotive' element={<Automotive/>}></Route>
        <Route path='/industrial' element={<Industrial/>}></Route>
        <Route path='/product/grease' element={<Grease/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
