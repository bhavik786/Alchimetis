/* eslint-disable */

// ** React Imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";
import { useHistory } from "react-router-dom";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../../../Reducers/UserReducer";

const UserDropdown = () => {
  // ** State
  const [userData] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])
  const [state, setState] = useState({
    userRole: "",
    userEmail: "",
  });

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar;

  const handleLogoutFunc = () => {
    localStorage.clear();
    dispatch(handleLogout());
    history.push("/login");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userJson"));
    console.log("====================================");
    console.log(userData);
    console.log("====================================");
    setState({
      ...state,
      userRole: (userData && userData.role) || "Admin",
      userEmail: (userData && userData.email) || "admin@gmail.com",
    });
  }, []);

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">
            {(state && state.userEmail) || "John Doe"}
          </span>
          <span className="user-status">
            {(state && state.userRole) || "Admin"}
          </span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu end>
        {/* <DropdownItem
          tag="a"
          href="/pages/profile"
          onClick={(e) => e.preventDefault()}
        >
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/apps/email"
          onClick={(e) => e.preventDefault()}
        >
          <Mail size={14} className="me-75" />
          <span className="align-middle">Inbox</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/apps/todo"
          onClick={(e) => e.preventDefault()}
        >
          <CheckSquare size={14} className="me-75" />
          <span className="align-middle">Tasks</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/apps/chat"
          onClick={(e) => e.preventDefault()}
        >
          <MessageSquare size={14} className="me-75" />
          <span className="align-middle">Chats</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          tag="a"
          href="/pages/account-settings"
          onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className="me-75" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/pages/pricing"
          onClick={(e) => e.preventDefault()}
        >
          <CreditCard size={14} className="me-75" />
          <span className="align-middle">Pricing</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/pages/faq"
          onClick={(e) => e.preventDefault()}
        >
          <HelpCircle size={14} className="me-75" />
          <span className="align-middle">FAQ</span>
        </DropdownItem> */}
        <DropdownItem tag={Link} onClick={handleLogoutFunc} to="/login">
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
