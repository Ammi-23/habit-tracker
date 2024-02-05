import { Route, Routes } from "react-router-dom";
// importing Navbar,DetailView,WeekView components
import Navbar from "./Navbar";
import DetailView from "./DetailView";
import WeekView from "./WeekView";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* Route to home/detail-view page */}
        <Route exact path="/" element={<DetailView/>}/>
        {/* Route to week-view page */}
        <Route exact path="/week-view" element={<WeekView/>}/>
      </Routes>
    </div>
  );
}

export default App;
