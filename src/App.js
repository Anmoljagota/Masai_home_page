import Home from './Rcomponents/Home';
import Sidebar from './Rcomponents/Sidebar';
import logo from './logo.svg';

// import './App.css';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Community from './Components/TechCommunity/Community';
import Partners from './Components/Partners/Partners';
import Footer from './ComponentsFooter/Footer';


function App() {
  return (
    <div className="App">

   {/* <Footer/> */}
    <Impect/>



    <Navbar/>
    <Home/>
    <Sidebar/>

    </div>
  );
}

export default App;
