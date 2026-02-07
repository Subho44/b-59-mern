import React,{useState} from 'react'

const Productform = ({addProduct}) => {
 const [form,setForm] = useState({
    name:'',
    price:'',
    quantity:'',
    description:'',
 });

 //input change

 const hc = (e) => {
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    });
 };

 //submission

 const hs = (e) => {
    e.preventDefault();

    addProduct({
        name:form.name,
        price:form.price,
        quantity:form.quantity,
        description:form.description,

    });
    setForm({
        name:'',
        price:'',
        quantity:'',
        description:'',
    });
 };



  return <>
  <div className='card p-3'>
    <h5>Add Product</h5>
    <form onSubmit={hs}>
        <input
        className='form-control mb-2'
        name='name'
        placeholder='Enter name'
        value={form.name}
        onChange={hc}
       />
        <input
        className='form-control mb-2'
        name='price'
        placeholder='Enter Price'
        value={form.price}
        onChange={hc}
       />
        <input
        className='form-control mb-2'
        name='quantity'
        placeholder='Enter quantity'
        type='number'
        value={form.quantity}
        onChange={hc}
       />
        <input
        className='form-control mb-2'
        name='description'
        placeholder='Enter description'
        value={form.description}
        onChange={hc}
       />
     <button className='btn btn-dark w-100'>Add Product</button>

    </form>
  </div>
  
  </>
}

export default Productform