import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { GiExitDoor } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 backdrop-blur mb-1 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 text-gray-700">
            {/* LOGO */}
            <div>
              <a href="" className="flex items-center px-2 py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-1 text-blue-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                <span className="font-bold">WebDev2776</span>
              </a>
            </div>

            {/* PRIMARY NAV */}
            <div className="md:flex items-center space-x-3 py-5 px-3 hidden">
              <a href="">Features</a>
              <a href="">Pricing</a>
            </div>
          </div>

          {/* SECONDARY NAV */}
          <div className="md:flex items-center space-x-4 hidden">
            {session ? (
              <div className="flex space-x-4 text-gray-500">
                <div className="flex items-center">
                  Signed in as {session.user.email}
                </div>
                <div>
                  <Link href="">
                    <CgProfile className="text-4xl" />
                  </Link>
                </div>
                <div>
                  <button onClick={() => signOut()}>
                    <GiExitDoor className="text-4xl" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button onClick={() => signIn()}>Sign In/ Sign up</button>
              </div>
            )}
          </div>
          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsHidden(!isHidden)}>
              {isHidden ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 transition durtion-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={
          isHidden ? "hidden" : "sm:hidden flex flex-col items-center h-screen"
        }
      >
        <a className="block hover:bg-gray-200 py-2 px-4 text-4xl" href="">
          Features
        </a>
        <a className="block hover:bg-gray-200 py-2 px-4 text-4xl" href="">
          Pricing
        </a>
        <hr className="border-gray-400 w-full my-2" />
        <div className="w-full flex justify-between px-4 mx-auto">
          {session ? (
            <div className="flex flex-col w-full">
              <div className="flex justify-between py-4 text-xl w-[60%] mx-auto">
                <div className="border py-2 px-2 rounded-xl">
                  <Link href="">My Account</Link>
                </div>
                <div className="border py-2 px-2 rounded-xl">
                  <button onClick={() => signOut()}>Sign Out</button>
                </div>
              </div>
              <div className="text-center">
                Signed in as: {session.user.email}
              </div>
            </div>
          ) : (
            <div className="flex justify-center border text-center w-full py-4 text-xl">
              <button onClick={() => signIn()}>Sign In/ Up</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
