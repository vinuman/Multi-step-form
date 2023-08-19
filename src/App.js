import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SelectPlan from "./SelectPlan";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/selectplan" element={<SelectPlan />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
