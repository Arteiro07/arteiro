import {
	DEPTH,
	HEIGHT,
	LENGTH,
	ROOF_STARTING_POSITION,
	SKY_LIGHT_DISTANCE,
} from "@/utils/constants";
import React from "react";

type RoofProps = {
	index: number;
	deep?: boolean;
};

export default function Roof({ index, deep = false }: RoofProps) {
	const roof: JSX.Element[] = [];
	const x = index * LENGTH + ROOF_STARTING_POSITION;

	for (let i = 0; i * SKY_LIGHT_DISTANCE < LENGTH; i = i + 1) {
		roof.push(
			<React.Fragment key={"fragment" + i}>
				<mesh
					key={"teto" + i}
					position={[
						x + (i * SKY_LIGHT_DISTANCE - LENGTH / 2),
						HEIGHT - 0.25,
						0,
					]} // Adjust position as needed
					rotation-x={Math.PI / 2} // Adjust args as needed
					receiveShadow
				>
					<boxGeometry
						key={"box" + i}
						args={[SKY_LIGHT_DISTANCE / 2, deep ? DEPTH * 2 : DEPTH, 0.5]}
					/>
					<meshStandardMaterial
						key={"material" + i}
						attach="material"
						color="white"
					/>
				</mesh>
				<rectAreaLight
					key={"luz" + i}
					position={[
						x + (i * SKY_LIGHT_DISTANCE - LENGTH / 2 + SKY_LIGHT_DISTANCE / 2),
						HEIGHT + 5,
						0,
					]}
					rotation-x={-Math.PI / 2}
					intensity={10}
				/>

				{/* <mesh
					key={"vidros" + i}
					position={[
						x + (i * SKY_LIGHT_DISTANCE - LENGTH / 2 + SKY_LIGHT_DISTANCE / 2),
						HEIGHT + 0.25,
						0,
					]}
					rotation-x={Math.PI / 2}
				>
					<boxGeometry
						key={"box" + i}
						args={[SKY_LIGHT_DISTANCE / 2, DEPTH, 0.5]}
					/>
					<MeshTransmissionMaterial
						//backside
						//backsideThickness={1}
						// samples={16}
						// thickness={1}
						// anisotropicBlur={0.1}
						// iridescence={1}
						// iridescenceIOR={1}
						// iridescenceThicknessRange={[0, 1400]}
						// clearcoat={1}
						// envMapIntensity={0.5}
						// key={"material" + i}
						// attach="material"
						// color={SKYLIGHT}
					/>
				</mesh> */}
			</React.Fragment>
		);
	}
	return <>{roof}</>;
}
