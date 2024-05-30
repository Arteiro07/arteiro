import { Euler, Vector3 } from "three";

export const HEIGHT = 30;
export const DEPTH = 30;
export const SKY_LIGHT_DISTANCE = 20;
export const SPEED = 2;
export const SKYLIGHT = "#F6FAFA";
export const CAMERASTART = {
	fov: 45,
	rotation: new Euler(0, 0, 0),
	position: new Vector3(0, HEIGHT / 2, DEPTH),
};
