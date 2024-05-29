import { DEPTH, HEIGHT, SKY_LIGHT_DISTANCE } from "@/utils/constants";

type RoofProps = {
	length: number;
};

export default function Roof(props: RoofProps) {
	const roof: JSX.Element[] = [];

	for (let i = 0; i * SKY_LIGHT_DISTANCE < props.length; i = i + 1) {
		roof.push(
			<mesh
				key={i}
				position={[i * SKY_LIGHT_DISTANCE - props.length / 2, HEIGHT, 0]} // Adjust position as needed
				rotation-x={Math.PI / 2} // Adjust args as needed
				receiveShadow
			>
				<boxGeometry args={[SKY_LIGHT_DISTANCE / 2, DEPTH]} />
				<meshStandardMaterial attach="material" color="hotpink" />
			</mesh>
		);
	}
	return <>{roof}</>;
}
