import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Editdelivery() {
  const {id} = useParams();
  const [inputs, setInputs] = useState({
    Ord_id:"",Pay_price:"",D_username:"",D_Status:"",D_time:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  useEffect(()=>{

    axios.get(`editdelivery/${id}`)
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
    axios.post("/updatedelivery/{id}",inputs)
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
      <input type="text" name="Ord_id" value={inputs.Ord_id} placeholder="Ord_id" onChange={handleChange} />

      </div>
      <div>
      <input type="text" name="Pay_price" value={inputs.Pay_price} placeholder="Pay_price" onChange={handleChange} />

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






export default Editdelivery;