
import './App.css';


import Home from './components/pages/Home';
import Bathroom from './components/pages/Bathroom'
import Bedroom from './components/pages/Bedroom'
import Partition from "./components/pages/Partition";
import Kitchen from './components/pages/Kitchen'
import Living from './components/pages/Living'
import Ceilings from './components/pages/Ceilings'
import Wardrobe from './components/pages/Wardrobe'


import Shelves from "./components/pages/Shelves";
import Tv from "./components/pages/Tv";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bathroom" element={<Bathroom />}></Route>
          <Route path="/bedroom" element={<Bedroom />}></Route>
          <Route path="/ceilings" element={<Ceilings />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/living" element={<Living />}></Route>
          <Route path="/wardrobe" element={<Wardrobe />}></Route>
          <Route path="/Partition" element={<Partition />}></Route>
          <Route path="/Shelves" element={<Shelves />}></Route>
          <Route path="/Tv" element={<Tv />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
