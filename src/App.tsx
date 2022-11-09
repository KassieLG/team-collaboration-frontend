import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//Content Components
import Homepage from './pages/homepage';
import Searchboth from './pages/search/searchboth';
import Searchflight from './pages/search/searchflight';
import Searchhotel from './pages/search/searchhotel';
import Viewflight from './pages/view/viewflight';
import Viewhotel from './pages/view/viewhotel';
import Viewresult from './pages/view/viewresult';


function App() 
{
  return (
    <div className="App">
      <BrowserRouter>

      {/* Client-Side Routing */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage/>} />
          <Route path="/searchboth" element={<Searchboth />} />
          <Route path="/searchflight" element={<Searchflight />} />
          <Route path="/searchhotel" element={<Searchhotel />} />
          <Route path="/viewflight/" element={<Viewflight />} />
          <Route path="/viewhotel/" element={<Viewhotel />} />
          <Route path="/viewresult" element={<Viewresult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
