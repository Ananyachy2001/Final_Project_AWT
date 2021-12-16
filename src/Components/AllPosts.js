import React, {useState, useEffect} from "react";
import axios from "axios";
import Post from './UserPost';

const AllPosts = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/medical/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            {/* <table>
                <tr>
                    <th>userId</th>
                    <th>Title</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.med_name}</td>
                    <td >{post.med_details}</td>
                </tr>
                    ))}
            </table> */}
            {
                posts.map(post=>(
                    <Post id={post.id}  med_name={post.med_name} med_details={post.med_details} men_date={post.men_date} exp_date={post.exp_date} med_cat={post.med_cat} quantity={post.quantity} key={post.id}></Post>


                ))
            }

                
        </div>
    )

}
export default AllPosts;