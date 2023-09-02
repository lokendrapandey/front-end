import React, { useState } from 'react'

const Addproduct = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [category, setcategory] = useState('');
  const [company, setcompany] = useState('');
  async function  addProduct() {
    console.table({name,price,category,company});
    const userId =JSON.parse(localStorage.getItem('user'))._id;
    const result = await fetch('http://localhost:5000/add-product',{
      method:'POST',
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        "Content-Type":"application/json"
      }
    });
    result = await result.json();
    console.log(result);

  }

  return (
    <div>
        <h1>aDD product</h1>
        <input type="text" placeholder='enter product name' value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
        <input type="text" placeholder='enter product price ' value={price} onChange={(e)=>{setprice(e.target.value)}} /> <br /> <br />
        <input type="text" placeholder='enter product catogary ' value={category} onChange={(e)=>{setcategory(e.target.value)}} /> <br /> <br />
        <input type="text" placeholder='enter product company ' value={company} onChange={(e)=>{setcompany(e.target.value)}} /> <br /><br />
        <button onClick={addProduct}>  Add product</button>

    </div>
  )
}

export default Addproduct
