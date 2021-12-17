import React, {useState, useEffect} from "react";
import axios from "axios";
import OrderDetailPost from './OrderDetailPost';
import { Link } from "react-router-dom";

const DeliveryList = ()=>{
    const [posts, setPosts] = useState([]);

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    useEffect(()=>{
        axios.get("delivery/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
             <table>
                <tr>
                    <th>Order ID: </th> <b/>
                    <th>Payment Price: </th> <b/>
                    <th>Delivery Username: </th> <b/>
                    <th>Delivery Status: </th> <b/>
                    <th>Delivery Time: </th> <b/>

                </tr>
                    {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.Ord_id}</td> <b/>
                    <td >{post.Pay_price}</td> <b/>
                    <td >{post.D_username}</td> <b/>
                    <td >{post.D_Status}</td> <b/>
                    <td >{post.D_time}</td> <b/>
                    <td><Link to={`editdelivery/${post.id}`}>Edit Delivery</Link></td>
                </tr>
                    ))}
            </table> 

{/*             {
                posts.map(post=>(
                    <OrderDetailPost id={post.id} order_id={post.order_id}  P_name={post.P_name}  P_price={post.P_price} P_categories={post.P_categories} P_quantity={post.P_quantity} P_tprice={post.P_tprice} P_size={post.P_size} U_username={post.U_username} key={post.id}></OrderDetailPost>


                ))
            } */}

                
        </div>
    )

}
export default DeliveryList;