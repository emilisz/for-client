import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "15px", backgroundColor:'grey', marginBottom:'15px', padding:'3px' }}>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/questions/new"}>
        <button>New +</button>
      </Link>
    </div>
  );
};

export default Header;
