import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type UseCustomTextureProps = {
	x: number;
	y: number;
	name: string;
	rotation: number;
};

export function useCustomTexture(props: UseCustomTextureProps) {
	const texture = useTexture({
		map: "/textures" + props.name + "_diff_1k.jpg",
		displacementMap: "/textures" + props.name + "_disp_1k.jpg",
		aoMap: "/textures" + props.name + "_arm_1k.jpg",
		roughnessMap: "/textures" + props.name + "_arm_1k.jpg",
		metalnessMap: "/textures" + props.name + "_arm_1k.jpg",
		normalMap: "/textures" + props.name + "_nor_gl_1k.jpg",
	});
	const tilexNumber = props.x;
	const tileyNumber = props.y;

	texture.map.rotation = props.rotation;
	texture.displacementMap.rotation = props.rotation;
	texture.aoMap.rotation = props.rotation;
	texture.roughnessMap.rotation = props.rotation;
	texture.metalnessMap.rotation = props.rotation;
	texture.normalMap.rotation = props.rotation;

	texture.map.repeat.set(tilexNumber, tileyNumber);
	texture.displacementMap.repeat.set(tilexNumber, tileyNumber);
	texture.aoMap.repeat.set(tilexNumber, tileyNumber);
	texture.roughnessMap.repeat.set(tilexNumber, tileyNumber);
	texture.metalnessMap.repeat.set(tilexNumber, tileyNumber);
	texture.normalMap.repeat.set(tilexNumber, tileyNumber);

	texture.map.wrapT = texture.map.wrapS = THREE.RepeatWrapping;
	texture.displacementMap.wrapT = texture.displacementMap.wrapS =
		THREE.RepeatWrapping;
	texture.aoMap.wrapT = texture.aoMap.wrapS = THREE.RepeatWrapping;
	texture.roughnessMap.wrapT = texture.roughnessMap.wrapS =
		THREE.RepeatWrapping;
	texture.metalnessMap.wrapT = texture.metalnessMap.wrapS =
		THREE.RepeatWrapping;
	texture.normalMap.wrapT = texture.normalMap.wrapS = THREE.RepeatWrapping;

	return texture;
}
