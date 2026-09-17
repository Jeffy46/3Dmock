import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Land from "../components/Land";
import Building from "../components/building/Building";
import buildings from "../components/building/buildings";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

let Homepage = () => {
  let [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, []);
  return (
    <div
      className={`relative w-screen h-screen overflow-hidden transition-opacity duration-1000 ease-in-out ${isReady ? "opacity-100" : "opacity-0"}`}
    >
      <Canvas
        camera={{
          position: [0, 60, 90],
        }}
      >
        <color attach="background" args={["#11151c"]} />
        <Land></Land>
        <Building buildings={buildings} />
        <ambientLight intensity={1} />
        <directionalLight position={[0, 1, 1]} intensity={1} />
        <OrbitControls
          maxPolarAngle={Math.PI / 3}
          maxDistance={250}
          minDistance={10}
        />
      </Canvas>
      <Link
        to="/leaderboard"
        className="absolute top-5 right-5 bg-yellow-400 hover:bg-yellow-500 p-4 rounded-2xl text-black w-40 text-center"
      >
        Leaderboard
      </Link>
    </div>
  );
};
export default Homepage;
