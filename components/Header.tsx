"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import ActionButton from "./ui/ActionButton";

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "AI Tools", href: "#" },
  { name: "Saas", href: "#" },
  { name: "Service Providers", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
  { name: "AI Domains", href: "#" },
  { name: "More", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 z-9999 w-full h-20 bg-[#E6ECF3] shadow-lg">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-4"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="size-8 overflow-hidden relative scale-125 mb-1">
                <Image
                  alt="Logo"
                  src={"/assets/images/rankrizerlogo.svg"}
                  width={40}
                  height={40}
                  className="w-8 h-8 object-cover object-center cursor-pointer"
                />
              </div>
              <div className="w-fit relative">
                <p className="text-[#004E93] font-bold text-2xl text-center leading-7 inline-block m-0 p-0">
                  RANKRIZERS
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex  space-x-2 mb-0 whitespace-nowrap">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="flex space-x-2 mb-0
               whitespace-nowrap relative hover:border-b-4 hover:border-[#FAA71B] mt-[28px] h-[52px]"
            >
              <a
                href={item.href}
                className="hover:no-underline focus:no-underline whitespace-nowrap cursor-pointer rounded-md "
              >
                <span className="px-3 py-2 text-[15px] text-[#333333] font-bold hover:text-[#004F94]">
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-1">
          <div className="flex items-center justify-center space-x-4 mr-4 w-full">
            <ActionButton
              label="Get Listed"
              variant="primary"
              paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
            />
            <ActionButton
              label="Sign in"
              variant="secondary"
              paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-x-0 bottom-0 top-20 z-40 bg-black/40 backdrop-blur-sm" />
        <DialogPanel
          className="fixed top-20 right-0 bottom-0 z-50 w-full overflow-y-auto bg-[#E6ECF3] shadow-lg
         p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10"
        >
          <div className="flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded w-full text-left py-2 px-4 transition flex justify-between items-center
                font-semibold line-clamp-1 cursor-pointer text-lg
                text-gray-800
                    
                    hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 flex items-center justify-center space-x-4 mr-4 w-full">
                <ActionButton
                  label="Get Listed"
                  variant="primary"
                  paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
                />
                <ActionButton
                  label="Sign in"
                  variant="secondary"
                  paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
                />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
