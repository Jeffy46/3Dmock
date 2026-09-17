import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Leaderboard from "./pages.tsx/Leaderboard";
import Homepage from "./pages.tsx/Homepage";
function App() {
  return (
    <>
      <BrowserRouter basename="/3Dmock/">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
