import React, { useEffect } from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Example from "pages/Example";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
