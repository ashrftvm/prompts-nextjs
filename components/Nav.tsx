"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProvidersFn = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setProvidersFn();
  }),
    [];
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link
        href="/"
        className="flex gap-2 flex-center"
      >
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Share Prompts</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className="black_btn"
            >
              Create Prompt
            </Link>
            <button
              type="submit"
              onClick={signOut}
              className="outline_btn"
            >
              Sign out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="user"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
