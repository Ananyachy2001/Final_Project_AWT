import React from "react"
import { Link } from "react-router-dom";
const Head = () => {
    return(
        <div>

            <Link class="btn btn-danger" to="/">Home</Link>
            <Link class="btn btn-success" to="/login">Login</Link>
            <Link class="btn btn-primary" to="/admincreate">Create Admin</Link>
            <Link class="btn btn-primary" to="/userlist">User List</Link>
            <Link class="btn btn-primary" to="/usercreate">Create User</Link>
            <Link class="btn btn-primary" to="/orderdetailcreate">Create Order Details</Link>
            <Link class="btn btn-primary" to="/orderdetaillist">Order Details list</Link>
            <Link class="btn btn-primary" to="/deliverylist">Delivery List </Link>
            <Link class="btn btn-primary" to="/productadd">Add Product</Link>
            <Link class="btn btn-primary" to="/productlist">Product List</Link>
            <Link class="btn btn-primary" to="/ordercreate">Order Now</Link>
            <Link class="btn btn-primary" to="/orderlist">See Order</Link>

            
        
        </div>

    )
}

export default Head;