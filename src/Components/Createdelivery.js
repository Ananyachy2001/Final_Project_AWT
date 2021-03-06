import React, {useState, useEffect} from "react";
import axios from "axios";


function Createdelivery() {
  const [inputs, setInputs] = useState({
    ord_id:"",pay_price:"",D_username:"",D_Status:"",D_time:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("delivery/create",inputs)
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
      <span>Order Id: </span> <b/>
          <select name="ord_id" onChange={handleChange} value={inputs.ord_id}>
          <option value="" disable="true" selected="true" >Select</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="7">7</option>
               
</select>

      </div>
      <div>
      <input type="text" name="pay_price" value={inputs.pay_price} placeholder="pay_price" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="D_username" value={inputs.D_username} placeholder="D_username" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="D_Status" value={inputs.D_Status} placeholder="D_Status" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="D_time" value={inputs.D_time} placeholder="D_time" onChange={handleChange} />

      </div>
      

      <input type="submit" placeholder="Add Delivery" />
       
    </form>
  )
}






export default Createdelivery;