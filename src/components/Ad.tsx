import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP  */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM  */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"} `}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/9746/people-mother-family-father.jpg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/9746/people-mother-family-father.jpg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "lorem ipsum doten  sossdndds slit."
            : size === "md"
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima facere rem soluta quibusdam sapiente sint obcaecati voluptate expedita error est."
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti enim! Quisquam iusto veritatis, aliquam exercitationem perferendis consequuntur, amet voluptas rerum natus accusamus laborum harum omnis quaerat animi doloribus eius."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg ">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
