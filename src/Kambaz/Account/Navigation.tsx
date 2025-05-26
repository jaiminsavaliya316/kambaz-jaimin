import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
      className={`${
        currentPath == "/Kambaz/Account/Signin" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> 
        Sign In 
      </Link>
      <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
      className={`${
        currentPath == "/Kambaz/Account/Signup" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> 
        Sign Up 
      </Link>
      <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
      className={`${
        currentPath == "/Kambaz/Account/Profile" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> 
        Profile 
      </Link>
    </div>
    
);}
