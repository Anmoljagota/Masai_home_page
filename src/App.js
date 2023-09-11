import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Community from './Components/TechCommunity/Community';
import Partners from './Components/Partners/Partners';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Community/>
    <Partners/>
    </div>
  );
}

export default App;
