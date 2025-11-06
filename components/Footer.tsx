import Image from "next/image";
import { FooterData } from "./constants/footerData";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#081627]  z-100 overflow-hidden">
      <div className="py-10 px-3.5">
        <div className="flex flex-wrap gap-2 text-[14px] font-[#AFB8C3]">
          <div className="flex-1 min-w-[200px]">
            <a
              href="#"
              className="w-fit h-[69px] flex items-center no-underline hover:no-underline focus:no-underline active:no-underline"
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-8 h-8 overflow-hidden relative scale-125 mb-1">
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
          {FooterData?.map((section) => (
            <div className="flex-1 min-w-[200px]" key={section?.title}>
              <p className="text-white pb-4 text-[15px] font-medium">
                {section?.title}
              </p>
              {section?.links?.map((links) => (
                <div className="mb-4" key={links?.label}>
                  <a
                    href={links?.href}
                    className="text-[#AFB8C3] hover:text-gray-500"
                  >
                    {links?.label}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#0E2642] w-full">
        <div className="container m-auto flex justify-center h-[60px] px-4 items-center">
          <p className="text-white wrap-break-word text-center">
            © 2025 RankRizers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
