import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		console.log('got here: login');
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (email === 'test@gmail.com' && password === 'testing') {
			cookies.set('auth', 'regularusertoken', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // 1 week
			});

			throw redirect(303, '/');
		}

		return { success: true };
	}
} satisfies Actions;
