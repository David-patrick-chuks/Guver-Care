import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./component/homepage/Create";
import Homepage from "./component/homepage/Homepage";
import Login from "./component/homepage/Login";
import HomeLayout from "./component/layout/HomeLayout";
import Service from "./pages/navservices/Service";
import Forgot from "./component/homepage/Forgot";
import Newpass from "./component/homepage/Newpass";
import AboutUs from "./component/homepage/AboutUs";
import Dashlayout from "./pages/Dashboard/Dashlayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointment from "./pages/Dashboard/Appointment";
import Payment from "./pages/Dashboard/Payment";
import Prescription from "./pages/Dashboard/Prescription";
import Medical from "./pages/Dashboard/Medical";
import Health from "./pages/Dashboard/Health";
import Setting from "./pages/Dashboard/Setting";
import General from "./pages/Dashboard/General";
import Help from "./pages/Dashboard/Help";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Homepage />} />
            <Route path="service" element={<Service />} />
            <Route path="login" element={<Login />} />
            <Route path="create" element={<Create />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="newpass" element={<Newpass />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>
          <Route element={<Dashlayout />}>
            <Route path="dashboard" index element={<Dashboard />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="payment" element={<Payment />} />
            <Route path="prescription" element={<Prescription />} />
            <Route path="medical" element={<Medical />} />
            <Route path="records" element={<Health />} />
            <Route path="setting" element={<Setting />} />
            <Route path="general" element={<General />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
