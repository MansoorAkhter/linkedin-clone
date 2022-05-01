import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  console.log("user---->>>",user)

 


  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}

      
    
      {avatar && <Avatar src={avatar} className="headerOption_icon">{user && user.email[0]}</Avatar>}

      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
