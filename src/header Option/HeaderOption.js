import React from 'react';
import "./HeaderOption.css"
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}

      {avatar && (<Avatar className="headerOption_icon">M</Avatar>)}
      
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;