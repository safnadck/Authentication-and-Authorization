
import 'bootstrap/dist/css/bootstrap.min.css';


 import {BrowserRouter, Routes, Route, } from 'react-router-dom' 
import Login from './Login'
import Signup from './Signup';
import Home from './Home'; 
import Dashboard from './Dashboard';
const App = () => {
  
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/register' element = {<Signup />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/dashboard' element = {<Dashboard />}></Route>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App