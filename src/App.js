import Home from './Rcomponents/Home';
import Sidebar from './Rcomponents/Sidebar';
import logo from './logo.svg';

// import './App.css';

import './App.css';

import Footer from './Components/Footer';
import Impect from './Components/Impect';

import Navbar from './Components/Navbar/Navbar';


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
