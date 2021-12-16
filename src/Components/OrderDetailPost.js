import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
                <span>order_id: {props.order_id}<b/></span>
                <span>P_name: {props.P_name}<b/></span>
                <span>P_price: {props.P_price}<b/></span>
                <span>P_categories: {props.P_categories}<b/></span>
                <span>P_quantity: {props.P_quantity}<b/></span>
                <span>P_tprice: {props.P_tprice}<b/></span>
                <span>P_size: {props.P_size}<b/></span>
                <span>U_username: {props.U_username}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;