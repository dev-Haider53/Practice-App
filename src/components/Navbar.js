import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/haider.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="headOne">
        <p>GET FREE DELIVERY & A NECKLACE WORTH ₹699 WHEN YOU PAY ONLINE</p>
      </div>
      <div className="navBar">
        <nav>
          <img src={img} alt="" height="200" />
          <Link to="/sale">Sale</Link>
        </nav>
      </div>
    </div>
  );
}
