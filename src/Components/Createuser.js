import React, {useState, useEffect} from "react";
import axios from "axios";


function Createuser() {
  const [inputs, setInputs] = useState({
    Name:"",Phone:"",Address:"",Username:"",Email:"",Password:"",Usertype:"admin",Profileimg:"default.jpg"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("user/create",inputs)
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
      <input type="text" name="Name" value={inputs.Name} placeholder="Name" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Phone" value={inputs.Phone} placeholder="Phone" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Address" value={inputs.Address} placeholder="Address" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Username" value={inputs.Username} placeholder="Username" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Email" value={inputs.Email} placeholder="Email" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Password" value={inputs.Password} placeholder="Password" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Usertype" value={inputs.Usertype} placeholder="Usertype" onChange={handleChange} />

      </div>

      <div>
      <input type="text" name="Profileimg" value={inputs.Profileimg} placeholder="Profileimg" onChange={handleChange} />

      </div>






        <input type="submit" />
    </form>
  )
}






export default Createuser;