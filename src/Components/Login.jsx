import React, { useEffect, useState } from 'react'
// import { Navigate  } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState();
    const [password , setpassword] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth){
        navigate("/")
      }
    },[])
    const handellogin = async () =>{
        console.table({email,password});
        let result = await fetch("http://localhost:5000/login",{
          method:'post',
          body:JSON.stringify((email,password)),
          headers:{
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();
        console.log(result)
        if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
          navigate('/products')
        }else{
          alert("please enter connect details")
        }
    }
  return (
    <div>
       {/* <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} /> <br /> */}
      <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} /> <br />
      <input type="text" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} /> <br />
      <button onClick={handellogin}>login</button>
    </div>
  )
}

export default Login
