import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import Education from './components/education';
import Exp from './components/experience';
import Contact from './components/contact';
import Main from './components/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
 <Router>
  <Routes>  
    <Route path='/' element ={<Introduction/>}/>
    <Route path="/main" element ={<Main />}/>
    <Route path="/education" element ={<Education />}/>
    <Route path="/exp" element ={<Exp />}/>
    <Route path="/contact" element ={<Contact />}/>
  </Routes>
 </Router>
  );
}

export default App;
