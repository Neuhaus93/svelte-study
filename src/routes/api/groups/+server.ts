import { createRandomGroups } from '$lib/faker';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const initialGroups = createRandomGroups();

	return json(initialGroups);
};
