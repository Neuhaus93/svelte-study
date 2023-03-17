import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const getGroup = async () => {
		const group = await prisma.group.findUnique({ where: { id: params.id } });

		if (!group) {
			throw fail(500, { message: 'Failed to get group' });
		}

		return group;
	};

	return {
		group: getGroup()
	};
};
