import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./App.css"

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div className='nav'>
    {
      auth ? <ul className='nav-ul'>
        <li><Link to='/'>Products</Link></li>
          <li><Link to='/add'>add-product</Link></li>
        <li><Link to='/update'>update</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout- ( {JSON.parse(auth).name} )</Link></li>
          </ul>
          :
          <ul className='nav-ul'>
           <li><Link to='/Signup'>Signup</Link></li>
          <li><Link to='/login'>login</Link></li>
          </ul>
          
        }

    </div>
    
  )
}

export default Nav


        {/* <li>{ auth ? <Link onClick={logout }  to='/logout' >Logout</Link> :
          <Link to='/Signup'>Signup</Link>}</li>
        <li><Link to='/login'>login</Link></li> */}