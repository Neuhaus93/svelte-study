import { redirect, type Handle } from '@sveltejs/kit';
import { authenticateUser } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = authenticateUser(event);
	const pathname = event.url.pathname + '/';

	if (pathname.startsWith('/auth/')) {
		if (event.locals.user) {
			throw redirect(303, '/app');
		}
	}

	if (pathname.startsWith('/app/')) {
		if (!event.locals.user) {
			throw redirect(303, '/auth/login');
		}
	}

	return await resolve(event);
};
