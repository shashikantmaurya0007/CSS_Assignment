import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FeedBackPage from "./pages/FeedBackPage";
import ThankYouPage from "./pages/ThankYouPage";
import EvenOddPage from "./pages/EvenOddPage";
function App() {
  //
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/feedback" element={<FeedBackPage />}></Route>
          <Route path="/evenodd" element={<EvenOddPage />}></Route>

          <Route path="/thankyou" element={<ThankYouPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
