import React from 'react'
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

const images = [img1, img2, img3, img1, img2, img3];



export default function Portfolio() {
  return (
    <>
       <div className="text-center my-8">
        <h1 className="uppercase font-bold text-4xl text-[#2c3e50]">Portfolio Component</h1>
        <div className="flex items-center justify-center my-4 ">
          <span className="border-t border-gray-300 w-20 mx-4 text-[#2c3e50]"></span>
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
          <span className="border-t border-gray-300 w-20 mx-4 text-[#2c3e50] "></span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-[80%] rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
