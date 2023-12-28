// import React from 'react'
import PersonImg from "../../assets/website/person.png";

export default function Hero() {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* image section */}
          <div>
            <div>
              <img src={PersonImg} alt="not found" />
            </div>
          </div>

          {/* description section */}
          <div className="space-y-3">
            <p className="text-primary">Hello I'm Angela</p>
            <h1 className="text-5xl font-semibold">Visual Designer</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut ullam nam id animi placeat esse dignissimos accusantium asperiores iure
              laboriosam totam aperiam tempore, perspiciatis consequatur itaque minus voluptatibus eaque officia minima magnam. Dignissimos a nisi architecto
              blanditiis labore commodi.{"  "}
            </p>
            <button className="uppercase  bg-primary text-white py-2 px-6 hover:bg-primary/80 rounded-sm duration-300">HIRE ME</button>
          </div>
        </div>
      </div>
    </div>
  );
}
