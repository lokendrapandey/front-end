import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Signup from './Components/Signup';
// import Login from './Components/Login'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import Productlist from './Productlist';
import UpdateProduct from './Components/UpdateProduct';

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>

    <Route element = {<PrivateComponent/>}> 
      {/* <Route path='/register' element={<h1>prouduct component</h1>} />  */}
      <Route path='/' element={<Productlist/>} /> 
      <Route path='/add' element={<Addproduct/>} /> 
      <Route path="/update/:id" element={<UpdateProduct/>} /> 
      {/* <Route path='/update' element={<UpdateProduct/>} />  */}
      <Route path='/logout' element={<h1>logout component</h1>} /> 
      <Route path='/profile' element={<h1>profile component</h1>} /> 
    </Route>

      <Route path='/Signup' element={<Signup/>} /> 
      <Route path='/login' element={<Login/>} />
    </Routes>

    </BrowserRouter>
    
    <Footer/>
    </div>
  );
}

export default App;
