import type { PageServerLoad } from './$types';

export const load = (() => {
	return {
		message: 'Sinup page'
	};
}) satisfies PageServerLoad;
