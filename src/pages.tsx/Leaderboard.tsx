import { Link } from "react-router-dom";
import Podiums from "../components/leaderboard/Podiums";
import { useEffect, useState } from "react";

let Leaderboard = () => {
  let [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, []);
  return (
    <div
      className={`transition-opacity duration-500 ease-in-out min-h-screen ${isReady ? "opacity-100" : "opacity-0"}`}
    >
      <Link
        to="/"
        className="absolute top-5 left-5 bg-yellow-400 hover:bg-yellow-500 p-4 rounded-2xl text-black w-40 text-center z-11"
      >
        Go back
      </Link>
      <main className="relative z-10 container mx-auto">
        <Podiums />
      </main>
    </div>
  );
};
export default Leaderboard;
