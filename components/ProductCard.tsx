"use client";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import ActionButton from "./ui/ActionButton";
import { FaBookmark } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
interface ProductCardProps {
  product: {
    uuid: string;
    name: string;
    description?: string;
    logo?: string;
    price?: number;
  };
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-300 shadow-lg w-full py-3 px-6  grid gap-1">
      <div className="flex w-full justify-between p-2 flex-wrap h-fit">
        <div className="flex">
          {/* logo */}
          <div className="h-16 w-16 rounded-xl overflow-hidden relative bg-white/50 shadow-md">
            <div className="relative w-full h-full">
              {product?.logo && (
                <Image
                  src={product?.logo}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-full aspect-ratio object-cover "
                />
              )}
            </div>
          </div>
          <div className="flex flex-col ms-4">
            <div className="w-fit flex gap-1 justify-center py-1 ps-1 items-center">
              <p className="font-bold text-xl">{product?.name}</p>
              <span className="items-center">
                <FaCheckCircle color="#1DA1F2" size={20} />
              </span>
            </div>
            <div className="flex items-center w-fit ps-1 text-[#64748B] font-medium">
              <div className="w-5 h-5">⭐ </div>
              <p className="ms-2 me-1">
                <span>5 (1 review)</span>
              </p>
            </div>
          </div>
        </div>
        {/* crown */}
        <div className="flex items-center">
          <div className="w-fit flex items-center justify-center">
            <span className="text-xl text-black font-semibold mt-2">0</span>
            <div className="w-12 h-12 relative">
              <div className="w-full h-full">
                <Image
                  src={"/assets/images/crown.png"}
                  alt="crown"
                  width={400}
                  height={300}
                  className="w-full h-full aspect-ratio object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ps-2 lg:ps-[5.6rem] w-full flex flex-wrap">
          <div className="flex flex-col py-2 w-40">
            <p className="text-xs font-normal">Budget</p>
            <p className="text-sm capitalize mt-0 font-semibold">$1000+</p>
          </div>
          <div className="flex flex-col py-2 w-40">
            <p className="text-xs font-normal">Hourly Rate</p>
            <p className="text-sm capitalize mt-0 font-semibold">$25</p>
          </div>
          <div className="flex flex-col py-2 w-40">
            <p className="text-xs font-normal">Team size</p>
            <p className="text-sm capitalize mt-0 font-semibold">20-49</p>
          </div>
          <div className="flex flex-col py-2 w-40 grow">
            <p className="text-xs font-normal">Location</p>
            <p className="text-sm capitalize mt-0 font-semibold">
              Ras Al Khaimah, United Arab Emirates
            </p>
          </div>
        </div>
        <div className="ps-2 lg:ps-[5.6rem] w-full flex flex-col">
          <p className="text-xs  font-medium mb-1">Description</p>
          <p className="text-sm text-justify mt-0 font-normal ">
            {product?.description}
          </p>
        </div>
      </div>
      <div className="ps-2 lg:ps-[5.8rem] pt-2 flex flex-wrap  justify-between items-center text-[15px]">
        <div className="w-4/6 flex flex-col lg:flex-row md:justify-between">
          <div className="flex  items-center gap-2 me-4">
            <ActionButton
              label="Save"
              variant="savebtn"
              className="border border- border-gray-400"
              paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
              icon={<FaBookmark />}
            />
            <span className="text-gray-500 hover:text-blue-700 scale-70">
              5
            </span>
          </div>
          <div className="flex  items-center gap-2 me-4">
            <ActionButton
              label="Upvote"
              variant="savebtn"
              className="border border- border-gray-400"
              icon={<BiSolidUpvote />}
            />
            <span className="text-gray-500 hover:text-blue-700 scale-70">
              5
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 w-2/6 flex-wrap">
          <ActionButton
            label="Visit Webiste"
            variant="secondary"
            paddings="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2"
          />
          <ActionButton label="View Profile" variant="bluebtn" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
