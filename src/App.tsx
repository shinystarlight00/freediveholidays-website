import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";
import DestinationList from "./pages/Destination/List";
import DestinationDetails from "./pages/Destination/Detail";
import TourList from "./pages/Tour/List";
import TourDetail from "./pages/Tour/Detail";
import Contact from "./pages/Contact";
import AboutUS from "./pages/AboutUs";
import Faq from "./pages/FAQ";
import ConciergeIndex from "./pages/Concierge/Concierge";
import InVilla from "./pages/Concierge/InVilla";
import FridgeStock from "./pages/Concierge/FridgeStock";
import HouseKeeping from "./pages/Concierge/HouseKeeping";
import PrivateChef from "./pages/Concierge/PrivateChef";
import ToursActivities from "./pages/Concierge/ToursActivities";
import CarHire from "./pages/Concierge/CarHire";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/tours" element={<TourList />} />
          <Route path="/tour/:id" element={<TourDetail />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/concierge" element={<ConciergeIndex />} />
          <Route path="/in-villa" element={<InVilla />} />
          <Route path="/private-chef" element={<PrivateChef />} />
          <Route path="/fridge-stock" element={<FridgeStock />} />
          <Route path="/house-keeping" element={<HouseKeeping />} />
          <Route path="/car-hire" element={<CarHire />} />
          <Route path="/tours-activity" element={<ToursActivities />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
