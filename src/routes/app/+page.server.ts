import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = async () => {
	const getGroups = async () => {
		const groups = await prisma.group.findMany();

		if (!groups) {
			throw fail(500, { message: 'Error loading groups' });
		}

		return groups;
	};

	return {
		groups: getGroups()
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('auth');

		throw redirect(303, '/');
	},
	createGroup: async ({ request }) => {
		const { name, description } = Object.fromEntries(
			await request.formData()
		) as {
			name: string;
			description: string;
		};

		let newGroup;
		try {
			newGroup = await prisma.group.create({
				data: {
					name,
					description
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the group' });
		}

		throw redirect(303, `/app/group/${newGroup.id}`);
	}
} satisfies Actions;
