import Home from './pages/home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import About from './pages/about/About';
import Contect from './pages/contect/Contect';
import Work from './pages/work/Work';
function App() {
  return (
    <Router>
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About/>}></Route>
                 <Route exact path='/work' element={< Work />}></Route>
                 <Route exact path='/contact' element={< Contect />}></Route>
          </Routes>
         
       </Router>
    
  );
}

export default App;
