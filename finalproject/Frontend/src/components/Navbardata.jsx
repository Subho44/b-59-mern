import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

const Navbardata = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const hl =()=>{
        localStorage.removeItem("token");
        navigate('/login');
    };

  return <>
  <div className='container-fluid  bg-dark'>
  <ul className='nav'>
    <li className='nav-item'>
        <Link to="/" className='nav-link text-light'>Register</Link>    
    </li>
    <li className='nav-item'>
        <Link to="/login" className='nav-link text-light'>Login</Link>    
    </li>
    {
        token && (
            <>
             <Link to="/home" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>About</Link>
               <Link to="/contact" className='nav-link'>Contact</Link>
               <button onClick={hl}>Logout</button>
            </>
        )
    }

  </ul>

  </div>
  
  
  </>
}

export default Navbardata