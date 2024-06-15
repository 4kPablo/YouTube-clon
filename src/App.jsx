import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { TopNavbar } from "./components/TopNavbar";
import { BottomNavbar } from "./components/BottomNavbar";
import { Home } from "./components/home/Home";
import { Shorts } from "./components/shorts/Shorts";
import { Subscriptions } from "./components/subscriptions/Subscriptions";
import { Library } from "./components/library/Library";
import { AllSubscriptions } from "./components/subscriptions/AllSubscriptions";

function App() {
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  return (
    <div className="flex flex-col">
      {/* {isNavbarVisible ? <TopNavbar /> : <></>} */}
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/library" element={<Library />} />
        <Route path="/all_subscriptions" element={<AllSubscriptions />} />
      </Routes>
      <Spacer />
      <BottomNavbar />
    </div>
  );
}

const Spacer = () => {
  return <div className="h-12"></div>;
};

export default App;
