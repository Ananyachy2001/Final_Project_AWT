import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
                <span>Dman_id: {props.Dman_id}<b/></span>
                <span>Order_id: {props.Order_id}<b/></span>
                <span>D_Status: {props.D_Status}<b/></span>
                <span>D_time: {props.D_time}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;