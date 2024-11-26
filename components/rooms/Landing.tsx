import { DEPTH, HEIGHT, LENGTH } from "@/utils/constants";
import { CornerPlant } from "../CornerPlant";
import Floor from "../Floor";
import Frame from "../Frame";
import { Logo } from "../Logo";
import { Neon } from "../Neon";
import Roof from "../Roof";
import Shelf from "../Shelf";
import Wall from "../Wall";

type LandingProps = {
	index: number;
	x: number;
};
export default function Landing(props: LandingProps) {
	return (
		<>
			<Shelf
				position={[-(props.x + LENGTH / 3), HEIGHT - 9.5, -DEPTH / 2]}
				size={[10, 0.5, 2]}
			/>
			<Logo
				position={[
					-(props.x + LENGTH / 3),
					HEIGHT - HEIGHT / 4 + 2,
					-DEPTH / 2 - 1,
				]}
				scale-x={2}
				scale-y={1.5}
				scale-z={2}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<Frame
				position={[0, HEIGHT - HEIGHT / 2, -DEPTH / 2]}
				size={[20, 0.5, 20]}
			/>
			<Neon position={[15, 18, -DEPTH / 2 + 1]} scale={0.27} />
			<CornerPlant
				scale-y={6}
				scale-x={5}
				scale-z={5}
				position={[-LENGTH / 2 + 5, 0, -DEPTH / 2 + 5]}
			/>
			<Wall index={props.index} />
			<Floor index={props.index} />
			<Roof index={props.index} />
		</>
	);
}
