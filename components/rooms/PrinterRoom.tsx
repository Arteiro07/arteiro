import Deep_Wall from "../DeepWall";
import Floor from "../Floor";
import Roof from "../Roof";

type PrinterRoomProps = {
	index: number;
	x: number;
};
export default function PrinterRoom(props: PrinterRoomProps) {
	return (
		<>
			<Deep_Wall index={props.index} />
			<Floor index={props.index} deep={true} />
			<Roof index={props.index} deep={true} />
		</>
	);
}
