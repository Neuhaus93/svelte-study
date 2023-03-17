import { v4 as uuidv4 } from 'uuid';

export const sleep = (ms = 1500) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateUUID = () => {
	return uuidv4();
};
