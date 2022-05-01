import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import './css/global.css';
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
