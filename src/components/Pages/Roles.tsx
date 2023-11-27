import { useState } from "react";
import RoleTable from "../Tables/RoleTable";

function Roles() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="absolute w-full lg:w-[900px] left-0 lg:left-[300px] h-full flex justify-center flex-col top-[30px] md:top-[0] ">
      <img
        className="absolute w-full lg:w-[800px] top-0 lg:top-[30px] left-0 lg:left-[90px]"
        src="/Rectangledash.png"
        alt=""
      />
      <div className="absolute border w-full lg:w-[850px] p-8 md:p-4 -mt-[140px] left-0 lg:left-[60px] flex flex-col md:flex-row shadow-lg justify-between">
        <form className="w-[400px] rounded-sm border border-black">
          <div className="flex">
            <div
              id="dropdown-search-city"
              className="z-10 hidden bg-white shadow w-44"
            ></div>
            <div className="relative w-full">
              <input
                type="search"
                className="block p-2.5 w-full z-20 text-sm"
                placeholder="Search ..."
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white border"
              >
                <svg
                  className="w-6 h-6 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <button className="custom_but w-[80px] h-[35px] md:w-20 mt-4 lg:mt-0">
          Add
        </button>
      </div>
      <div className="table relative left-[30px] top-[140px]">
        <RoleTable searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Roles;
