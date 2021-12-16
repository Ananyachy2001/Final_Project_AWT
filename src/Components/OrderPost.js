import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
                <span>Order id: {props.O_id}<b/></span>
                <span>user id: {props.user_id}<b/></span>
                <span>username: {props.U_username}<b/></span>
                <span>Product total price: {props.P_tprice}<b/></span>
                <span>Paymant type: {props.Paymanttype}<b/></span>
                <span>Order status: {props.O_status}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;