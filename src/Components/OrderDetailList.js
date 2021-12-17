import React, {useState, useEffect} from "react";
import axios from "axios";
import OrderDetailPost from './OrderDetailPost';
import { Link } from "react-router-dom";

const AllPosts = ()=>{
    const [posts, setPosts] = useState([]);

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/orderdetail/list")
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
                    <th>Order Id</th><b/>
                    <th>Product name</th> <b/>
                    <th>Product Price</th> <b/>
                    <th>Product Categories</th> <b/>
                    <th>Product Total Price</th> <b/>
                    <th>Product Size</th> <b/>
                    <th>Username</th> <b/>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id} style={PostStyle}>
                    <td >{post.order_id}</td><b/>
                    <td >{post.P_name}</td> <b/>
                    <td >{post.P_price}</td><b/>
                    <td >{post.P_categories}</td><b/>
                    <td >{post.P_tprice}</td><b/>
                    <td >{post.P_size}</td><b/>
                    <td >{post.U_username}</td><b/>
                    <td><Link to={`editorderdetails/${post.id}`}>Edit Order Details</Link></td>
                </tr>
                    ))}
            </table> 
{/*             {
                posts.map(post=>(
                    <OrderDetailPost id={post.id} order_id={post.order_id}  P_name={post.P_name}  P_price={post.P_price} P_categories={post.P_categories} P_quantity={post.P_quantity} P_tprice={post.P_tprice} P_size={post.P_size} U_username={post.U_username} key={post.id}></OrderDetailPost>


                ))
            }   */}

                
        </div>
    )

}
export default AllPosts;