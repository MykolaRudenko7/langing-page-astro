import { useState } from "react";
import NavMenu from "components/NavMenu";
import Sidebar from "components/Sidebar";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="container">
      <div className="flex px-3 py-5">
        <div className="flex items-center pt-3">
          <img src="images/logo.svg" alt="Snap Logo" />
        </div>
        <div className="z-20 flex flex-grow items-center">
          <NavMenu />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="sidebar-menu"
            aria-label="Open Menu"
          >
            <img
              className="block lg:hidden"
              src="images/icon-menu.svg"
              alt="Menu"
            />
          </button>
          <Sidebar open={open} setOpen={setOpen} />
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <div className="cursor-pointer hover:text-almost-black">Login</div>
            <div>
              <button className="rounded-xl border-2 px-4 py-2 hover:border-almost-black hover:text-almost-black">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
