import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Productform from '../components/Productform';
import Producttable from '../components/Producttable';


const Home = () => {
  const API  = "http://localhost:6800/api/products";
  //api data store
  const[products,setProducts] = useState([]);

  //fetch data
  useEffect(()=>{
  loadproducts();
  },[]);

  //load product
   const loadproducts = async()=>{
    const res = await axios.get(API);
    setProducts(res.data);
   }

   //add product

    const addproduct = async(data)=>{
    await axios.post(API,data);
    loadproducts();
   };

  return <>
  <div className='container-fluid mt-4'>
    <h3 className='text-center'>Product add and details</h3>
    <Productform addProduct={addproduct}/>
    <hr/>
    <Producttable products={products}/>
  </div>
 

  </>
}

export default Home