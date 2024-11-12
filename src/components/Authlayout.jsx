import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Authlayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { status } = useSelector((state) => state.auth);
  useEffect(() => {
    // if(status===true && status ===true) navigate("/")
    // let authValue=status===true?true:false
    // status !== authentication (is ki jaga ya upper likh kr aik varaible mas tore krwa kr is trha nichy ya variable likh do is trha)authValue
    if (authentication && status !== authentication) {
      navigate("/login");
    } else if (!status && authentication === status) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate, status, authentication]);
  return loading ? <h1>Loading.....</h1> : <div>{children}</div>;
}

export default Authlayout;
