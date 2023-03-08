import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('auth');

		throw redirect(303, '/');
	}
} satisfies Actions;
