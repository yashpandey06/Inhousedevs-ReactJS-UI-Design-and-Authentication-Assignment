import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import Dashboard from "../Pages/Dashboard";

export default function Template() {
  const [loader, setLoader] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = sessionStorage.getItem("email");
    if (auth) {
      setTimeout(() => {
        setLoader(false);
      }, 6000);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return loader ? <Loader /> : <Dashboard />;
}
