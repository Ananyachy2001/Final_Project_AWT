import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
                <span>p id: {props.P_id}<b/></span>
                <span>P name: {props.P_name}<b/></span>
                <span>Picture price: {props.P_price}<b/></span>
                <span>Picture categories: {props.P_categories}<b/></span>
                <span>Picture quantity: {props.P_quantity}<b/></span>
                <span>Picture details: {props.P_details}<b/></span>
                <span>Picture 1: {props.P_img1}<b/></span>
                <span>Picture 2: {props.P_img2}<b/></span>
                <span>Picture 3: {props.P_img3}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;