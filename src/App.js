import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Random from './components/Random'
import Trending from './components/Trending'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trending" element={<Trending />}/>
          <Route path="/random" element={<Random />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
