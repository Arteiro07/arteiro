import { Euler, Vector3 } from "three";

export const HEIGHT = 30;
export const DEPTH = 30;
export const SKY_LIGHT_DISTANCE = 20;
export const LENGTH = 60;
export const SCROLLLENGTH = 3;
export const ROOF_STARTING_POSITION = 5;

export const SPEED = 10;
export const SKYLIGHT = "#F6FAFA";
export const CAMERASTART = {
	fov: 45,
	rotation: new Euler(0, 0, 0),
	position: new Vector3(0, HEIGHT / 2, DEPTH),
};

export const FRAMEPOS = new Vector3(0, HEIGHT / 2, DEPTH);
