import React, {useState, useEffect} from "react";
import axios from "axios";


function CreateOrder() {
  const [inputs, setInputs] = useState({
    O_id:"",user_id:"",U_username:"",P_tprice:"",Paymanttype:"",O_status:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("/order/create",inputs)
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
      <input type="text" name="O_id" value={inputs.O_id} placeholder="O_id" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="user_id" value={inputs.user_id} placeholder="user_id" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="U_username" value={inputs.U_username} placeholder="U_username" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="P_tprice" value={inputs.P_tprice} placeholder="P_tprice" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Paymanttype" value={inputs.Paymanttype} placeholder="Paymanttype" onChange={handleChange} />

      </div>
      
      <input type="text" name="O_status" value={inputs.O_status} placeholder="O_status" onChange={handleChange} />

      

      <input type="submit" placeholder="Add Order" />
       
    </form>
    
  )
}






export default CreateOrder;