import React, {useState, useEffect} from "react";
import axios from "axios";


function CreateOrderDetails() {
  const [inputs, setInputs] = useState({
    order_id:"",p_name:"",p_price:"",p_categories:"",p_quantity:"",p_tprice:"",p_size:"",u_username:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("/orderdetail/create",inputs)
    .then(resp=>{
        var infos = resp.data;
        console.log(infos);

    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>

      <span>Order Id</span> <b/>
          <select name="order_id" onChange={handleChange} value={inputs.order_id}>
          <option value="" disable="true" selected="true" >Select</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="7">7</option>
               
</select>
      </div>
      <div>
      <input type="text" name="p_name" value={inputs.p_name} placeholder="p_name" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="p_price" value={inputs.p_price} placeholder="p_price" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="p_categories" value={inputs.p_categories} placeholder="p_categories" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="p_quantity" value={inputs.p_quantity} placeholder="p_quantity" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="p_tprice" value={inputs.p_tprice} placeholder="p_tprice" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="p_size" value={inputs.p_size} placeholder="p_size" onChange={handleChange} />

      </div>

      <div>
      <input type="text" name="u_username" value={inputs.u_username} placeholder="u_username" onChange={handleChange} />

      </div>


      <input type="submit" placeholder="Add Order" />
       
    </form>
  )
}






export default CreateOrderDetails;