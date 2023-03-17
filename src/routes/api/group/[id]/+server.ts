import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	return json({
		id: params.id
	});
};
