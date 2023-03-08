import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = (() => {
	throw redirect(303, '/app');
}) satisfies PageServerLoad;
