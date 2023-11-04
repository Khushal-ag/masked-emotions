"use client";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/maskedemotions.png"
          width={50}
          height={50}
          alt="maskedemotions"
        />
        <p className="font-satoshi text-xl font-semibold tracking-wide text-black">
          MaskedEmotions
        </p>
      </Link>
      <div className="sm:flex">
        <div className="flex gap-2">
          <Link href="/stories" className="outline_btn font-inter">
            Stories
          </Link>
          <Link href="/about" className="outline_btn font-inter">
            About
          </Link>
          <Link
            href="/create-story"
            className="font-inter flex items-center justify-center rounded-full border border-black bg-black px-5 py-1.5 text-center text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
