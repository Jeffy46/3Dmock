import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Land from "./components/Land";
import Building from "./components/Building";
import buildings from "./components/buildings";

let Homepage = () => {
  return (
    <div className="h-screen">
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
    </div>
  );
};
export default Homepage;
