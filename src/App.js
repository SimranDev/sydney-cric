import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { SlideRightContext } from "./helpers/Contexts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import CricEvents from "./pages/CricEvents";

function App() {
  const [slideRight, setSlideRight] = useState(true);

  return (
    <Router>
      <SlideRightContext.Provider value={{ slideRight, setSlideRight }}>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/matches" exact component={Matches} />
          <Route path="/events" exact component={CricEvents} />
        </Switch>
      </SlideRightContext.Provider>
    </Router>
  );
}

export default App;
