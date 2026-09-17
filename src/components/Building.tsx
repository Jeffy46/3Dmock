import * as THREE from "three";

export interface BuildingType {
  name: string;
  corners: [number, number][];
  height: number;
  color: string;
}

interface BuildingsProps {
  buildings: BuildingType[];
}

function Buildings({ buildings }: BuildingsProps) {
  return (
    <group>
      {buildings.map((building) => {
        const boxes = [];

        // Consume corners two at a time: each pair is the opposite
        // corners [x, z] of one axis-aligned rectangle. A simple building
        // has one pair; a merged building has several.
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

        // Sit each box on top of the ground plane (Land is at y = 0),
        // so its base is at y = 0 and it extrudes upward by `height`.
        const centerY = building.height / 2;

        return (
          <group key={building.name} name={building.name}>
            {boxes.map((box, i) => (
              <mesh
                key={i}
                position={[box.centerX, centerY, box.centerZ]}
                castShadow
                receiveShadow
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(building.name, [
                    box.width,
                    building.height,
                    box.depth,
                  ]);
                }}
              >
                <boxGeometry args={[box.width, building.height, box.depth]} />
                <meshStandardMaterial
                  color={building.color}
                  roughness={0.8}
                  side={THREE.FrontSide}
                />
              </mesh>
            ))}
          </group>
        );
      })}
    </group>
  );
}

export default Buildings;
