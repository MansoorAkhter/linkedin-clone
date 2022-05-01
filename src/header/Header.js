import React from "react";
import "./Header.css";
import HeaderOption from "../header Option/HeaderOption";
import { Search, Home, SupervisorAccount, Chat, BusinessCenterRounded, Notifications } from '@mui/icons-material';
import { useDispatch, useSelector} from "react-redux";
import { auth } from "../firebase/firebase";
import { logout, selectUser} from "../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser)

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div style={{ display: 'flex' }}>

        <div className="header_left">
          <img src="/images/linkedin.png" alt="" />
        </div>
        <div className="header_search">
          <Search />

          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenterRounded} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={user && user.photoUrl} title="Logout" onClick={logoutOfApp} />

      </div>
    </div>
  );
};

export default Header;
