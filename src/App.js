import Home from './Rcomponents/Home';
import Sidebar from './Rcomponents/Sidebar';
import logo from './logo.svg';

// import './App.css';

import './App.css';

import Footer from './Components/Footer';
import Impect from './Components/Impect';

import Navbar from './Components/Navbar/Navbar';
import Community from './Components/TechCommunity/Community';
import Partners from './Components/Partners/Partners';


function App() {
  return (
    <div className="App">

   
    <Impect/>

    <Home/>
    <Sidebar/>


    <Navbar/>

    <Community/>
    <Partners/>
<Footer/>
    

    </div>
  );
}

export default App;
