import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

export default function Navbar() {
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);


  //close both menu and dropdown
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMobileOpen(false);
      setIsModelsOpen(false);
      setIsAnimatingOut(false);
    }, 500);
  };


  return (
    <header className="nav flex items-center justify-between sm:px-[20px] sm:py-4 md:px-20 md:pt-10 lg:px-[60px] lg:py-4 2xl:px-[288px] 2xl:py-10 relative">
      {/* Logo */}
      <a className="siteLogo sm:max-lg:w-[40%] sm:max-lg:p-[10px]" href="/">
        <img src="/src/assets/logos/site-logo.png" alt="Site Logo" />
      </a>

      {/* HAMBURGER */}
      <button
        className="lg:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle navigation"
      >
        <span className="w-7 h-[4px] bg-black block"></span>
        <span className="w-7 h-[4px] bg-black block"></span>
        <span className="w-7 h-[4px] bg-black block"></span>
      </button>

{/* DESKTOP NAV */}
      <nav className="desktopNav hidden! lg:flex! sm:max-xl:gap-6 xl:gap-10! items-center">
        <NavLink to="/mainboard" className="text-[16px] font-semibold 2xl:text-[24px]" end>MAIN BOARD</NavLink>
        <NavLink to="/infocus" className="text-[16px] font-semibold 2xl:text-[24px]">INFOCUS</NavLink>

        {/* Models dropdown */}
        <div
          className="nav-dropdown relative"
          onMouseEnter={() => setIsModelsOpen(true)}
          onMouseLeave={() => setIsModelsOpen(false)}
        >
          <NavLink to="/models" className="nav-dropdown-trigger text-[16px] 2xl:text-[24px] inline-flex items-center gap-2">
            MODELS <span className={`dropdown-arrow ${isModelsOpen ? "open" : ""}`}>▼</span>
          </NavLink>

          {isModelsOpen && (
            <div className="nav-submenu absolute mt-2 bg-white shadow p-3">
              <NavLink to="/models/kids" className="text-[16px] font-semibold 2xl:text-[24px]">Kids</NavLink>
              <NavLink to="/models/teens" className="text-[16px] font-semibold 2xl:text-[24px]">Teens</NavLink>
              <NavLink to="/models/thai" className="text-[16px] font-semibold 2xl:text-[24px]">Thai</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/grwmrr" className="text-[16px] font-semibold 2xl:text-[24px]">GRWMRR</NavLink>
        <NavLink to="/contact" className="text-[16px] font-semibold 2xl:text-[24px]">CONTACT US</NavLink>
      </nav>

{/* MOBILE NAV */}
      {isMobileOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-full w-full flex z-[9999]">
          {/* Left silhouette section */}
          <div className="relative w-[100%] bg-cover bg-center bg-black filter opacity-50" 
               onClick={handleClose}
          ></div>
          {/* Right menu panel */}
          <div className={`flex flex-col gap-10 fixed top-0 right-0 h-full w-[70%] bg-[#d5d5d5] sm:p-10 sm:pt-20 md:pt-20 md:p-16 shadow-lg  
          ${isAnimatingOut ? "animate-slide-out" : "animate-slide-in"}`}
          >
            {/* Close button */}
            <button className="absolute top-6 right-6 text-4xl" 
                    onClick={handleClose}>×
            </button>
            <NavLink to="/mainboard"  className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" end onClick={handleClose}>MAIN BOARD</NavLink>
            <NavLink to="/infocus"  className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>INFOCUS</NavLink>

            {/* MODELS dropdown */}
            <div>
              <div className="flex items-center gap-4 cursor-pointer">
                <NavLink to="/models"  className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>MODELS</NavLink>
                <span className={`transition-transform ${isModelsOpen ? "rotate-180" : ""}`}
                      onClick={() => setIsModelsOpen(!isModelsOpen)}>▼</span>
              </div>

              {isModelsOpen && (
                <div className="flex flex-col ml-4 gap-2 mt-2">
                  <NavLink to="/models/kids" className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>Kids</NavLink>
                  <NavLink to="/models/teens" className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>Teens</NavLink>
                  <NavLink to="/models/thai" className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>Thai</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/grwmrr" className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>GRWMRR</NavLink>
            <NavLink to="/contact" className="sm:text-[16px] md:text-[20px] font-semibold 2xl:text-[24px]" onClick={handleClose}>CONTACT US</NavLink>
            
            {/*site logo mobile */}
            <a className="p-0 self-center sm:w-[160px] md:w-[230px] pt-10" href="/">
              <img src="/src/assets/logos/Transparent_MRR_logo.png" alt="Site Logo" />
            </a>
            <section className="sm:max-w-[200px] mx-auto">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center m-auto">
                  <a href="https://www.facebook.com/p/Manila-Runway-Republic-100066762881641/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      strokeWidth="2"
                      className="ai ai-FacebookFill"
                    >
                      <g clipPath="url(#clip0_65_70)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_65_70">
                          <rect width="24" height="24" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center m-auto">
                  <a href="https://www.instagram.com/manilarunwayrepublic/?hl=en" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      strokeWidth="2"
                      className="ai ai-InstagramFill"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.549.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268 5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948 5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.049-1.655.228-2.043.379-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.379 1.16.053 1.507.064 4.445.064 2.938 0 3.285-.011 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986 3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996 5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89 1.337 1.337 0 0 0 1.89 1.89z"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center m-auto">
                  <a href="https://www.tiktok.com/@manilarunwayrepublic" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      strokeWidth="2"
                      className="ai ai-TiktokFill"
                    >
                      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .399-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604 3.226 3.226 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281 0-1.814 1.46-3.282 3.26-3.282.341 0 .68.054 1.004.16l.005-3.936A7.178 7.178 0 0 0 4.76 10.71a7.583 7.583 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187.359-.015 1.562 0 2.928-.647 1.515-.718 2.377-1.787 2.377-1.787a7.43 7.43 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </header>
  );
}
