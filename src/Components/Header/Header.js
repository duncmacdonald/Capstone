import { FoodBank, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <Link to="/" className="Header__Logo">
        <FoodBank fontSize="large" htmlColor="#34AD6C" />
        <h1>DO</h1>
      </Link>
      <Link to="/account" className="Header__Account">
        <AccountCircle fontSize="large" htmlColor="#586F6B" />
      </Link>
    </header>
  );
}
