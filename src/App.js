import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Fotter from './components/fotter/Fotter';
import Scroller from './components/scroller/Scroller';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Scroller/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/show' Component={Show} />
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;
