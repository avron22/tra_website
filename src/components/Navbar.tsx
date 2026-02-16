import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Navbar() {

  return (
      <>
      <div className="flex justify-between min-h-[65px]">
        <nav className="desktopNav flex justify-between items-center px-[160px] w-full">
          <div>
            <NavLink to="/" className="text-[16px] font-semibold xl:text-[24px]" end>HOME</NavLink>
          </div>
          
          <div>
            <img src="/src/assets/site-logo.png" alt="Site Logo" />
          </div>

          <div>
            <NavLink to="/About" className="text-[16px] font-semibold xl:text-[24px]">ABOUT US</NavLink>
            <NavLink to="/Contact" className="text-[16px] font-semibold xl:text-[24px]">CONTACT US</NavLink>
          </div>
        </nav>
      </div>
      </>
  );
}
