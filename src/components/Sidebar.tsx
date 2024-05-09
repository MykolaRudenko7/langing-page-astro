import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild
} from "@headlessui/react";
import { navigationButtons } from "data/content";

interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      <Transition show={open}>
        <TransitionChild
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`fixed right-0 top-0 z-50 h-screen w-[250px] bg-almost-white p-8 pt-20`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute right-5 top-5"
                src="images/icon-close-menu.svg"
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3">
              {navigationButtons.map(({ title, items }) => (
                <li>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex items-center text-left">
                          <span className="mr-4">{title}</span>
                          <img
                            src={`images/icon-arrow-${open ? "up" : "down"}.svg`}
                            alt="Arrow"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                          <ul className="flex flex-col space-y-3">
                            {items?.map((item, itemIndex) => (
                              <li className="cursor-pointer" key={itemIndex}>
                                {item.icon && (
                                  <img
                                    src={item.icon}
                                    alt={`${item.name} icon`}
                                    className="mr-3 inline w-4"
                                  />
                                )}
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                </li>
              ))}
              <li>Careers</li>
              <li>About</li>
            </ul>

            <div className="flex flex-col items-center justify-items-center space-y-5 pt-8">
              <div className="cursor-pointer hover:text-almost-black">
                Login
              </div>
              <div className="w-full">
                <button className="w-full rounded-xl border-2 px-4 py-2 hover:border-almost-black hover:text-almost-black">
                  Register
                </button>
              </div>
            </div>
          </div>
        </TransitionChild>
        <TransitionChild
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <button
            onClick={() => setOpen(false)}
            className={`"w-full fixed inset-0 z-10 h-full bg-black opacity-80`}
          ></button>
        </TransitionChild>
      </Transition>
    </>
  );
}
