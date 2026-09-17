import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Land from "./Land";

const CameraDebug = () => {
  const { camera } = useThree();

  const logCamera = () => {
    console.log("Camera Position:", {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    });

    console.log("Camera Zoom:", camera.zoom);
  };

  return (
    <Html fullscreen>
      <button
        onClick={logCamera}
        className="absolute top-4 left-4 z-50 rounded bg-white px-4 py-2 text-black shadow"
      >
        Log Camera
      </button>
    </Html>
  );
};
export default CameraDebug;
