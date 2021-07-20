/* This example requires Tailwind CSS v2.0+ */
import { auth } from "firebase";
import { useAuth } from "@/lib/auth";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, BellIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import Link from "next/link";

export default function Header() {
  const auth = useAuth();
  return (
    <Disclosure
      as="nav"
      className=" py-6 text-gray-500   bg-white   sticky top-0 z-50 h-20  "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
            <div className="flex justify-between  relative">
              <ul className=" font-body   ">
                {/* <Link href="/">
                  <li className="uppercase space-x-8 t font-body text-md font-gray-500  text-black  mr-6">
                    Vuhze
                  </li>
                </Link> */}
                <Link href="/">
                  <img
                    className="mt-1 h-6 w-auto "
                    src="/images/vuhzelogo.png"
                    alt=""
                  />
                </Link>
                {/* <Link href="/">
                  <img
                    className="h-6 w-auto block xl:hidden lg:hidden md:hidden  "
                    src="/images/oslogo.png"
                    alt=""
                  />
                </Link> */}
              </ul>

              {/* hides content on small screens */}
              <div className="hidden sm:ml-6 sm:block">
                <ul className="  uppercase space-x-2  font-body text-md font-bold tracking-widest text-gray-800  mr-4">
                  <Link href="/service">
                    <a className=" hover:text-gray-600 ">Services</a>
                  </Link>
                  <Link href="/post">
                    <a className="hover:text-gray-600">News</a>
                  </Link>
                  <Link href="/contact">
                    <a className="hover:text-gray-600">Contact</a>
                  </Link>

                  <Link href="/dashboard">
                    <a className="hover:text-gray-600">Dashboard</a>
                  </Link>

                  {auth?.user ? (
                    <button
                      onClick={(e) => auth.signout()}
                      className=" p-2  text-sm tracking-widest font-bold uppercase text-md rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 justify-end"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <button
                      onClick={(e) => auth.signinWithGitHub()}
                      className=" p-2  text-sm tracking-widest font-bold uppercase text-md rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 justify-end"
                    >
                      Sign In
                    </button>
                  )}

                  <Link href="/account/register">
                    <button
                      type="button"
                      className=" p-2  text-sm tracking-widest font-bold uppercase rounded-sm text-white  bg-indigo-700 hover:bg-indigo-600 justify-end"
                    >
                      Register
                    </button>
                  </Link>
                </ul>
              </div>

              <div className="  flex sm:hidden  ">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-gray-200 hover:text-white ">
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
            <ul className="  px-4 py-6   space-y-6 flex uppercase  font-body bg-gray-900 w-full  font-bold tracking-widest text-gray-200 flex-col">
              <Link href="/">
                <a>Index</a>
              </Link>
              <Link href="/service">
                <a>Services</a>
              </Link>
              <Link href="/post">
                <a>News</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <Link href="/dashboard">
                <a className="hover:text-gray-600">Dashboard</a>
              </Link>
              {auth?.user ? (
                <button
                  onClick={(e) => auth.signout()}
                  className=" p-2  text-sm tracking-widest font-bold uppercase text-md rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 justify-end"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={(e) => auth.signinWithGitHub()}
                  className=" p-2  text-sm tracking-widest font-bold uppercase text-md rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 justify-end"
                >
                  Sign In
                </button>
              )}

              <Link href="/">
                <button
                  type="button"
                  className=" px-4 py-2  text-sm tracking-widest font-bold uppercase rounded-sm text-white  bg-indigo-700 hover:bg-indigo-600 justify-end"
                >
                  Register
                </button>
              </Link>
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
