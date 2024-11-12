import React from "react";
import { logout } from "../../slice/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";

function LogoutBTN() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div>
      <button onClick={handleSubmit}>Log Out</button>
    </div>
  );
}

export default LogoutBTN;
