import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type UseCustomTextureProps = {
	x?: number;
	y?: number;
	name: string;
	rotation?: number;
};

export function useCustomTexture({
	x = 0,
	y = 0,
	name,
	rotation = 0,
}: UseCustomTextureProps) {
	const texture = useTexture({
		map: "/textures" + name + "_diff_1k.jpg",
		displacementMap: "/textures" + name + "_disp_1k.jpg",
		aoMap: "/textures" + name + "_arm_1k.jpg",
		roughnessMap: "/textures" + name + "_arm_1k.jpg",
		metalnessMap: "/textures" + name + "_arm_1k.jpg",
		normalMap: "/textures" + name + "_nor_gl_1k.jpg",
	});
	const tilexNumber = x;
	const tileyNumber = y;

	texture.map.rotation = rotation;
	texture.displacementMap.rotation = rotation;
	texture.aoMap.rotation = rotation;
	texture.roughnessMap.rotation = rotation;
	texture.metalnessMap.rotation = rotation;
	texture.normalMap.rotation = rotation;

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
