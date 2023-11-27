import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Admin from "../../icons/Adminicon";
import Logout from "../../icons/Logouticon";
import Roleicon from "../../icons/Roleicon";

interface ButtonProp {
  id: number;
  text: string;
  to: string;
  svg: JSX.Element;
}

function Dashboard() {
  const [activeState, setActiveState] = useState<number | null>(null);
  const [buttonnames] = useState<ButtonProp[]>([
    {
      id: 1,
      text: "Admin Management",
      to: "/dashboard/admin",
      svg: <Admin />,
    },
    {
      id: 2,
      text: "Role Management",
      to: "/dashboard/roles",
      svg: <Roleicon />,
    },
    {
      id: 3,
      text: "Logout",
      to: "/login",
      svg: <Logout />,
    },
  ]);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>();
  const [usermail, setUseremail] = useState<string | null>();

  useEffect(() => {
    const auth: string | null = sessionStorage.getItem("email");
    let index: number | null;
    if (auth?.length !== 0 && auth !== null) {
      index = auth.indexOf("@");
      setUsername(auth.substring(0, index));
      setUseremail(auth);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    navigate("/login");
  };

  const handleClick = (id: number) => {
    setActiveState(id);
  };

  return (
    <div className="flex">
      <div className="side-panel min-h-screen w-[300px] fixed hidden lg:flex flex-col p-5">
        <div className="flex flex-col h-[200px] w-full justify-center gap-5 items-center">
          <div className="logo">
            <img src="/Womb.png" alt="" />
          </div>
          <div className="profile bg-slate-100 rounded-full w-[84px] h-[84px] flex items-center justify-center border-2 border-white">
            <img
              className="w-20 h-20 rounded-full"
              src="/imagewomb.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1 text-sm items-center">
            <h1 className="text-slate-100">{username}</h1>
            <h2 className="text-slate-400">{usermail}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-white justify-center relative top-[50px] font-bold">
          {buttonnames.map((eachButton: ButtonProp) => (
            <div className="flex items-center" key={eachButton.id}>
              <NavLink
                className={`flex gap-8 p-5 ${
                  activeState === eachButton.id ? "custom_but" : ""
                }`}
                to={eachButton.to}
                onClick={() => {
                  handleClick(eachButton.id);
                  if (eachButton.text === "Logout") {
                    handleLogout();
                  }
                }}
              >
                <div>{eachButton.svg}</div>
                <button name={eachButton.text}>{eachButton.text}</button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
