import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-xs scrollbar-hide ">
      <div className="flex gap-8 w-max">
        {/* STORY  */}

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1639047/pexels-photo-1639047.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className=" w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className=" font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
