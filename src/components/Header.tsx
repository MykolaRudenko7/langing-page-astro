import NavMenu from "components/NavMenu";

export default function Header() {
  return (
    <header className="flex px-3 py-5">
      <div className="pt3 flex items-center">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div className="z-20 flex flex-grow items-center">
        <NavMenu />
      </div>
      <div className="flex items-center">
        <a href="/">
          <img
            src="images/icon-menu.svg"
            alt="Navigation menu"
            className="block lg:hidden"
          />
        </a>
        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          <div className="cursor-pointer hover:text-almost-black">Login</div>
          <button
            type="button"
            about="register"
            className="rounded-xl border-2 px-4 py-2 hover:border-almost-black hover:text-almost-black"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
