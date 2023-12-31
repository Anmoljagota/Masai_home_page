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

import Elevate from './ComponentsFooter/Elevate';
import Certificate from './ComponentsFooter/Certificate';
import Alumni from './Rcomponents/Alumni';
import Courses from './Rcomponents/Courses';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Alumni/>
    <Sidebar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Courses/>
    <Community/>
    <Partners/>
    <StudentImpact/>
    <Elevate/>    
    <Certificate/>
    <Footer/>
    </div>
  );
}

export default App;
