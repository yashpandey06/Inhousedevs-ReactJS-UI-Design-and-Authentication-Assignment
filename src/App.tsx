import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Template from "./components/Template/Template";
import Admin from "./components/Pages/Admin";
import Roles from "./components/Pages/Roles";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Template />}>
        <Route path="admin" index element={<Admin />} />
        <Route path="roles" index element={<Roles />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
