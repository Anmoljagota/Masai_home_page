import Home from './Rcomponents/Home';
import Sidebar from './Rcomponents/Sidebar';
import logo from './logo.svg';

// import './App.css';

import './App.css';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Sidebar/>
    </div>
  );
}

export default App;
