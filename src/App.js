import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SelectPlan from "./SelectPlan";
import Addons from "./AddOns";
import FinishUp from "./FinishUp";
import ThankYou from "./ThankYou";

function App() {
  return (
    <>
      <div className="font-ubuntu">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/selectplan" element={<SelectPlan />}></Route>
          <Route path="/addons" element={<Addons />}></Route>
          <Route path="/finish" element={<FinishUp />}></Route>
          <Route path="/thanks" element={<ThankYou />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
