import { useState } from "react";
import { HEADER } from "../../config-global";

const navigation = [
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  return (
    <div className="bg-white">
      <header
        className="fixed flex-col top-0 left-auto right-0 z-50 w-full"
        style={{ height: HEADER.H_MAIN_DESKTOP }}
      >
        <nav className="container mx-auto h-full flex items-center justify-between p-3 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Boss Thanawat</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-1 justify-end gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
