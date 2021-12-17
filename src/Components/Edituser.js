import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function Edituser() {

  const {id} = useParams();
  const [inputs, setInputs] = useState({
    U_Name:"",U_phone:"",U_address:"",U_username:"",U_email:"",U_password:"",Usertype:"admin",U_profileimg:"default.jpg"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  useEffect(()=>{

    axios.get(`edituser/${id}`)
        .then(resp=>{
        console.log(resp.data);      
        setInputs(resp.data);
    }).catch(err=>{

        console.log(err);

        });

    },[]);

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(inputs);
    axios.post("/updateuser/{id}",inputs)
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
      <span>Name:</span> <b/>
      <input type="text" name="U_Name" value={inputs.U_Name} placeholder="U_Name" onChange={handleChange} />

      </div>
      <div>
      <span>Phone Number:</span> <b/>
      <input type="text" name="U_phone" value={inputs.U_phone} placeholder="U_phone" onChange={handleChange} />

      </div>
      <div>
      <span>Address:</span> <b/>
      <input type="text" name="U_address" value={inputs.U_address} placeholder="U_address" onChange={handleChange} />

      </div>
      <div>
      <span>Username:</span> <b/>
      <input type="text" name="U_username" value={inputs.U_username} placeholder="U_username" onChange={handleChange} />

      </div>
      <div>
      <span>Email:</span> <b/>
      <input type="text" name="U_email" value={inputs.U_email} placeholder="U_email" onChange={handleChange} />

      </div>
      <div>
      <span>Password:</span> <b/> 
      <input type="password" name="U_password" value={inputs.U_password} placeholder="U_password" onChange={handleChange} />

      </div>
      <div>

      <span>Usertype</span> <b/>
          <select name="Usertype" onChange={handleChange} value={inputs.Usertype}>
          <option value="" disable="true" selected="true" >Select</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
          <option value="Customer">Customer</option>
          <option value="Delivery Man">Delivery Man</option>  
               
</select>
      </div>

      <div>
      <span>Profile image:</span> <b/>
      <input type="text" name="U_profileimg" value={inputs.U_profileimg} placeholder="U_profileimg" onChange={handleChange} />

      </div>






        <input type="submit" />
    </form>
  )
}






export default Edituser;