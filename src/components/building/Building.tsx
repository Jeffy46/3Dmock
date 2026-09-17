import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { Float } from "@react-three/drei";
export interface BuildingType {
  name: string;
  corners: [number, number][];
  height: number;
  color: string;
}

interface BuildingsProps {
  buildings: BuildingType[];
}

function SingleBuilding({ building }: { building: BuildingType }) {
  const navigate = useNavigate();
  const [shiny, setShiny] = useState(false);

  const boxes = [];

  for (let i = 0; i + 1 < building.corners.length; i += 2) {
    const [x0, z0] = building.corners[i];
    const [x1, z1] = building.corners[i + 1];

    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minZ = Math.min(z0, z1);
    const maxZ = Math.max(z0, z1);

    boxes.push({
      width: maxX - minX,
      depth: maxZ - minZ,
      centerX: (minX + maxX) / 2,
      centerZ: (minZ + maxZ) / 2,
    });
  }

  const centerY = building.height / 2;
  const baseColor = new THREE.Color(building.color);
  const darkerColor = baseColor.clone().lerp(new THREE.Color("black"), 0.4);

  // Grab the center coordinates of the first box to place our pointer
  const pointerX = boxes[0]?.centerX || 0;
  const pointerZ = boxes[0]?.centerZ || 0;
  const pointerY = building.height + 4; // Float 4 units above the roof

  return (
    <group name={building.name}>
      {building.height == 15 && (
        <Float
          speed={10} // How fast it bobs up and down
          rotationIntensity={0} // Set to 0 so the pointer doesn't wobble
          floatIntensity={15} // How high/low it travels
        >
          <mesh
            position={[pointerX, pointerY, pointerZ]}
            rotation={[Math.PI, 0, 0]} // Rotates the cone 180deg to point DOWN
          >
            <coneGeometry args={[1.5, 3, 4]} />
            <meshStandardMaterial
              color="yellow"
              emissive="orange"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      )}
      {boxes.map((box, i) => (
        <mesh
          key={i}
          position={[box.centerX, centerY, box.centerZ]}
          castShadow
          receiveShadow
          onClick={(e) => {
            e.stopPropagation();
            console.log(building.name, [box.width, building.height, box.depth]);
            if (building.height == 15) {
              navigate("/leaderboard");
            }
          }}
          onPointerEnter={() => setShiny(true)}
          onPointerLeave={() => setShiny(false)}
        >
          <boxGeometry args={[box.width, building.height, box.depth]} />
          <meshStandardMaterial
            color={shiny ? darkerColor : building.color}
            roughness={0.8}
            side={THREE.FrontSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// 2. Main component simply maps over the data
function Buildings({ buildings }: BuildingsProps) {
  return (
    <group>
      {buildings.map((building) => (
        <SingleBuilding key={building.name} building={building} />
      ))}
    </group>
  );
}

export default Buildings;
