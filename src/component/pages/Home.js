import React from "react";

function Home() {
  return (
    <div>
      <div className="bg-gray-600 text-white py-10">
        <div className="containerkws">
          <div className="flex  justify-between">
            <div className="font-bold">Weather App</div>
            <div className="flex gap-2">
              <div className="">a</div>
              <div className="">b</div>
              <div className="">c</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgimage h-80">
        <div className="bg-[rgba(0,0,0,0.3)] h-full ">
          <div className="containerkws h-full">
            <div className="text-white flex items-center justify-center h-full text-5xl font-bold ">
              GoHighLevel Weather app
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-4">
        <div className="containerkws">
          <div className="flex justify-between">
            <div className="flex rounded overflow-hidden	">
              <input
                type="text"
                className="bg-white w-80 p-2"
                placeholder="e.g. london"
              />
              <div className="bg-black p-2 text-white">Search</div>
            </div>
            <div className="">a</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
