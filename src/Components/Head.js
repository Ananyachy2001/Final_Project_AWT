import React from "react"
import { Link } from "react-router-dom";
const Head = () => {
    return(
        <div>

            <Link className="btn btn-danger"  to="/">Home</Link> <b/>
            <Link className="btn btn-primary" to="/admincreate">Create Admin</Link> <b/>
            <Link  className="btn btn-primary" to="/userlist">User List</Link> <b/>
            <Link  className="btn btn-primary" to="/createuser">Create User</Link> <b/>
            <Link className="btn btn-primary"  to="/orderdetailcreate">Create Order Details</Link> <b/>
            <Link className="btn btn-primary"  to="/orderdetaillist">Order Details list</Link> <b/>
            <Link  className="btn btn-primary" to="/deliverylist">Delivery List </Link> <b/>
            <Link  className="btn btn-primary" to="/productadd">Add Product</Link> <b/>
            <Link className="btn btn-primary"  to="/productlist">Product List</Link> <b/>
            <Link  className="btn btn-primary" to="/ordercreate">Order Now</Link> <b/>
            <Link  className="btn btn-primary" to="/orderlist">See Order</Link><b/> <b/>
            <Link  className="btn btn-success" to="/login">Login</Link> <b/>

            
        
        </div>

    )
}

export default Head;