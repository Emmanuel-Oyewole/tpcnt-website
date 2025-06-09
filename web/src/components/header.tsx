"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type NavLink = {
  id: number;
  link: string;
  path: string;
};

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isModalOpen && window.innerWidth < 786) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const navLinks: NavLink[] = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "Projects", path: "/projects" },
    { id: 4, link: "Contact", path: "/contact" },
    { id: 5, link: "Media", path: "/media" },
  ];

  return (
    <>
      <section className="border">
        <div className="flex flex-row justify-between items-center py-4 px-2">
          {/* Logo */}
          <div className="flex-none">
            <Link href="/">Logo</Link>
          </div>
          {/* Desktop Nav Links */}
          <div className="nav-link hidden md:flex gap-4">
            {navLinks.map((item) => (
              <Link key={item.id} href={item.path}>
                {item.link}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="block md:hidden"
            onClick={toggleModal}
            aria-label="Open navigation menu"
          >
            <Menu className="text-blue-300" />
          </button>
        </div>
        {/* Mobile Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-grey bg-opacity-50 flex items-center justify-center z-50 md:hidden">
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-xs flex flex-col items-center ">
              <button
                className="absolute top-2 right-2"
                onClick={toggleModal}
                aria-label="Close navigation menu"
              >
                <X className="text-blue-300" />
              </button>
              <nav className="flex flex-col gap-6 mt-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={toggleModal}
                    className="text-gray-900 text-lg"
                  >
                    {item.link}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
