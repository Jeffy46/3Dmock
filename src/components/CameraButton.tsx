import { useThree } from "@react-three/fiber";

let CameraButton = () => {
  const { camera } = useThree();

  const printCamera = () => {
    console.log("Camera position:", camera.position);
    console.log("Camera zoom:", camera.zoom);
  };

  return <button onClick={printCamera}>Print Camera</button>;
};

export default CameraButton;
