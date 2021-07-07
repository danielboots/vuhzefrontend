/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, BellIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className=" py-8 text-gray-700 tracking-tight  bg-gray-900  sticky top-0 z-50 h-20 "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between  relative">
              <ul className="  uppercase  font-body  font-bold tracking-widest text-gray-200  ">
                <Link href="/">
                  <a>Index</a>
                </Link>
              </ul>

              {/* hides content on small screens */}
              <div className="hidden sm:ml-6 sm:block">
                <ul className="  uppercase space-x-8  font-body  font-bold tracking-widest text-gray-200  mr-6">
                  <Link href="/">
                    <a>Index</a>
                  </Link>
                  <Link href="/service">
                    <a>Services</a>
                  </Link>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </ul>
              </div>

              <div className="  flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-gray-400 hover:text-white hover:bg-gray-00 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <ul className="  px-4 pt-6 pb-4 space-y-6 flex uppercase  font-body bg-gray-900 w-full  font-bold tracking-widest text-gray-200 flex-col">
              <Link href="/service">
                <a>Services</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
