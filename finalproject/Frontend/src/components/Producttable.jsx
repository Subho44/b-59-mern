import React from 'react'

const Producttable = ({ products }) => {

  return <>
    <div>
      <h2>Product List</h2>
      <table className='table table-dark table-bordered table-hover'>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Description</th>
        </tr>
        {
          products.map((x,index)=>(
            <tr>
              <td>{index +1}</td>
               <td>{x.name}</td>
               <td>{x.price}</td>
               <td>{x.quantity}</td>
               <td>{x.description}</td>
            </tr>
          ))
        }
      </table>
    </div>


  </>
}

export default Producttable