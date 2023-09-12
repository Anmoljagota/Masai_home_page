import Home from './Rcomponents/Home';
import Sidebar from './Rcomponents/Sidebar';
import logo from './logo.svg';

// import './App.css';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Community from './Components/TechCommunity/Community';
import Partners from './Components/Partners/Partners';
import Footer from './ComponentsFooter/Footer';
import StudentImpact from './Components/StudentImpact';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Sidebar/>
    <Community/>
    <Partners/>
    <StudentImpact/>
{/* <Footer/> */}
    

    </div>
  );
}

export default App;
