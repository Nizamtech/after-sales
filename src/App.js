import "./App.css";
import Dashboard from "./Components/Dashboard/DashboardRoot/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Dashboard/Login/Login";
import Register from "./Components/Dashboard/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/home" element={<DashboardHome />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registation" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
