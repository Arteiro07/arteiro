import { Plane } from "@react-three/drei";
const HEIGHT = 30;
type WallProps = {
	length: number;
};
export default function Wall(props: WallProps) {
	return (
		<Plane
			position={[0, 25, -10]} //[x-left to right, y up or down , closer or further Half of DEPTH]
			rotation={[0, 0, 0]}
			args={[100, HEIGHT]} // [wall size = length, const heigth]
			receiveShadow
		>
			<meshStandardMaterial attach="material" color="white" />
		</Plane>
	);
}
