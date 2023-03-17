import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Groups } from '$lib/stores/groups';

export const load = async ({ fetch }) => {
	const getGroups = async () => {
		const response = await fetch('/api/groups');
		return (await response.json()) as Groups;
	};

	return {
		groups: getGroups()
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('auth');

		throw redirect(303, '/');
	}
} satisfies Actions;
