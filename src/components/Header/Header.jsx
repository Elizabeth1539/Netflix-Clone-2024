
import React from 'react'
import "./header.css"
import NetflexLogo from "../../assets/images/NetflexLogo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_Outer_Container">
      <div className="header_container ">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflexLogo} alt="Netflex Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Moveies</li>
            <li>Latest</li>
            <li>myList</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        {
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default Header