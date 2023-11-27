import { NavLink, useNavigate } from "react-router-dom";
import { FunctionComponent } from "react";
import { useState } from "react";
const LoginPage: FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  function handelClick() {
    sessionStorage.setItem("email", email);
    navigate("/dashboard");
  }
  return (
    <div className="bg-basic-white  h-screen overflow-hidden text-left text-sm text-a3055 font-lato min-w-screen">
      <img
        className="absolute top-[60px] left-[1199.2px] w-[81.7px] h-14 hidden"
        alt=""
        src="/womblogo.png"
      />
      <div className="absolute top-[702.5px] left-[980px] leading-[20px] font-dm-sans text-dark60 hidden">
        Forget Password?
      </div>
      <img
        className="hidden lg:flex absolute top-[0px] left-[650px] h-full w-1/2 "
        alt=""
        src="/imagewomb.png"
      />
      <div className="absolute top-[231.5px] left-[170px] text-[20px] tracking-[0.1px] leading-[26px] font-semibold">
        Login to your account
      </div>
      <NavLink
        className="absolute top-[428.5px] left-[67px] leading-[20px] opacity-[0.7] hover:underline"
        to={"#"}
      >
        Forget Password?
      </NavLink>
      <div className="absolute top-[510.5px] left-[67px] rounded-lg bg-ff6666 w-[400px] h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border text-basic-white">
        <button
          onClick={handelClick}
          className=" scale-110  custom_but relative tracking-[0.1px] leading-[20px] font-medium w-[433px] h-[222px] rounded-[8px]"
        >
          Login
        </button>
      </div>
      <div className="absolute top-[278px] left-[67px] w-[400px] h-[60px] text-mini">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke box-border w-[400px] h-[60px] opacity-[0.3] border-[1px] border-solid border-a3055 " />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-[18px] left-[12px] "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>

        <input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email Address"
          className="absolute tracking-[-0.2px] leading-[24px] font-medium opacity-[0.6] h-[60px] w-full left-[44px]"
        />
      </div>
      <div className="absolute top-[353px] left-[67px] w-[400px] h-[60px] text-mini">
        <div className="absolute top-[0px] left-[42px] w-[400px] h-[60px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke box-border w-[400px] h-[60px] opacity-[0.3] border-[1px] border-solid border-a3055" />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="absolute tracking-[-0.2px] leading-[24px] font-medium opacity-[0.6] h-[60px] w-full"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-[18px] left-[12px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>
      </div>

      <div className="   w-1/2  h-[200px]  flex justify-center  ">
        <img
          className="absolute top-[82px] left-[233px]"
          alt=""
          src="/womblogo.jpg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
