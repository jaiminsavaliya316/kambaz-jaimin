import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
    {links.map((link) => (
      <Link 
        key={link}
        to={`/Kambaz/Account/${link}`} 
        id={`wd-account-${link.toLowerCase()}-link`}
        className={`${
          currentPath === `/Kambaz/Account/${link}` 
            ? "list-group-item active border border-0" 
            : "list-group-item text-danger border border-0"
        }`}
      > 
        {link === "Signin" ? "Sign In" : link === "Signup" ? "Sign Up" : link}
      </Link>
    ))}
    </div>
    
);}
