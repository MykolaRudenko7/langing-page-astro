import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from "@headlessui/react";
import { navigationButtons } from "data/content";

export default function NavMenu() {
  return (
    <nav>
      <ul className="hidden lg:ml-14 lg:flex lg:space-x-7">
        {navigationButtons.map(({ title, items }) => (
          <li>
            <Menu>
              <MenuButton className="hover:text-almost-black">
                {title}
                <img
                  src="images/icon-arrow-down.svg"
                  alt="Icon down arrow"
                  className="ml-1 inline-block"
                />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <MenuItems
                  anchor="bottom"
                  className="right-0 mt-4 w-40 rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                >
                  {items?.map((item, itemIndex) => (
                    <MenuItem key={itemIndex}>
                      <a
                        className="block w-full cursor-pointer px-4 py-2 text-left text-sm data-[focus]:bg-blue-100 data-[focus]:text-gray-900"
                        href="#"
                      >
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={`${item.name} icon`}
                            className="mr-3 inline w-4"
                          />
                        )}
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Transition>
            </Menu>
          </li>
        ))}
        <li className="cursor-pointer hover:text-almost-black">Careers</li>
        <li className="cursor-pointer hover:text-almost-black">Blog</li>
      </ul>
    </nav>
  );
}
