import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Group } from '$lib/stores/groups';

export const load = async ({ fetch, params }) => {
	const getGroup = async () => {
		const response = await fetch(`/api/group/${params.id}`);
		return (await response.json()) as Group;
	};

	return {
		groups: getGroup()
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('auth');

		throw redirect(303, '/');
	}
} satisfies Actions;
