import type { RequestEvent } from '@sveltejs/kit';

export const authenticateUser = (event: RequestEvent) => {
	// get cookies from request
	const { cookies } = event;

	// get the user token from the cookie
	const userToken = cookies.get('auth');

	// if the user token is not valid, return null
	if (userToken === 'regularusertoken') {
		const user = {
			id: 1,
			name: 'Lucas Neuhaus',
			email: 'lucas@email.com',
			role: 'USER'
		};

		return user;
	}

	return null;
};
