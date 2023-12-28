// import React from "react";

export default function Experience() {
  return (
    <div className="dark:bg-black text-white dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* first col */}
          <div className="bg-dark/50  p-4 grid place-content-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">12</h1>
              <p className="text-xl font-semibold">Years of Experience</p>
            </div>
          </div>

          {/* second col */}
          <div className="grid grid-rows-2 gap-4">
            {/* section1 */}
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Happy Client</p>
            </div>
            {/* section2 */}
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">100+</h1>
              <p>Projects Completed</p>
            </div>
          </div>

          {/* third col */}
          <div className="grid grid-rows-2 gap-4">
            {/* section1 */}
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">630+</h1>
              <p>Happy Client</p>
            </div>
            {/* section2 */}
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">100+</h1>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
