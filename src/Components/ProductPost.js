import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
                <span>id: {props.id}<b/></span>
                <span>u_name: {props.U_name}<b/></span>
                <span>u_phone: {props.U_phone}<b/></span>
                <span>u_address: {props.U_address}<b/></span>
                <span>u_username: {props.U_username}<b/></span>
                <span>u_email: {props.U_email}<b/></span>
                <span>usertype: {props.Usertype}<b/></span>
                <span>u_profileimg: {props.U_profileimg}<b/></span>
                <br></br>
            </div>
                    
                    
    )

}
export default Post;