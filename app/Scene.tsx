import Left_Wall from "@/components/LeftWall";
import Landing from "@/components/rooms/Landing";
import AnimationRoom from "@/components/rooms/PrinterRoom";
import Room_3 from "@/components/rooms/Room_3";
import { SCROLLLENGTH } from "@/utils/constants";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
/*
    Staging of most loadComponents, floor walls and each "room"
    
    aftereffects
*/

export default function Scene() {
	const maxIndex = 2;
	return (
		<>
			//TODO SCROLL LENGTH varies with screen size not sure how to fix
			<ScrollControls
				horizontal
				damping={0.1}
				infinite={false}
				pages={SCROLLLENGTH}
			>
				{/* 
					TODO Drag to move camera
				<DragControls
					dragLimits={[
						[-(maxIndex + 1) * LENGTH, 0],
						[0, 0],
						[0, 0],
					]}
				> */}
				<Scroll>
					<Left_Wall />
					<ambientLight intensity={0.5} />
					{/* <OrbitControls /> */}
					{/* <Camera /> */}
					<Landing x={0} index={0} />
					<AnimationRoom x={1} index={1} />
					<Room_3 x={2} index={2} />
				</Scroll>
				<EffectComposer>
					<Bloom luminanceThreshold={0} luminanceSmoothing={4} height={300} />
				</EffectComposer>
				{/* </DragControls> */}
			</ScrollControls>
		</>
	);
}
