import useScrollRoom from "@/hooks/useScrollRoom";
import { useState } from "react";
import Floor from "./Floor";
import Roof from "./Roof";
import Wall from "./Wall";

/*
    Staging of most loadComponents, floor walls and each "room"
    
    aftereffects
*/

export default function Scene() {
	const [length, setLength] = useState(100);
	useScrollRoom();

	return (
		<>
			<ambientLight intensity={0.5} />
			{/* <OrbitControls /> */}
			<Wall length={length} />
			<Floor length={length} />
			<Roof length={length} />
			{/* <EffectComposer>
						<Bloom luminanceThreshold={0} luminanceSmoothing={4} height={300} />
					</EffectComposer> */}
		</>
	);
}
