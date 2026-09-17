import * as THREE from "three";

function Land() {
  // We use a massive scale multiplier on the Y axis to stretch the 0.1 height into a deep pit
  const verticalScale = 10000;
  // Calculate the offset so the top of the mesh stays at your exact ground level (Y = 0)
  const yOffset = -(0.1 * verticalScale) / 2;

  return (
    <mesh position={[0, yOffset, 0]} scale={[1, verticalScale, 1]}>
      <boxGeometry args={[110, 0.1, 110]} />

      <meshStandardMaterial
        color="#212d40"
        roughness={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
export default Land;
