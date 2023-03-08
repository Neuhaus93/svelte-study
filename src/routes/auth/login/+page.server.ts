import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { redirect } from '@sveltejs/kit';

export const load = (() => {
	return {
		message: 'Login page'
	};
}) satisfies PageServerLoad;

const loginSchema = z.object({
	email: z
		.string()
		.trim()
		.min(1, { message: 'E-mail is required' })
		.email({ message: 'Must be a valid e-mail address' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' })
		.max(32, { message: 'Password must be less then 32 characters' })
		.trim()
});

export const actions = {
	default: async ({ cookies, request }) => {
		let formData = Object.fromEntries(await request.formData()) as z.infer<typeof loginSchema>;

		// Validate the form data
		try {
			formData = loginSchema.parse(formData);
		} catch (err) {
			let errors = {};
			if (err instanceof z.ZodError) {
				errors = err.flatten().fieldErrors;
			}
			return {
				data: { email: formData.email },
				errors
			};
		}

		if (formData.email === 'test@gmail.com' && formData.password === 'testing') {
			cookies.set('auth', 'regularusertoken', {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // 1 week
			});

			throw redirect(303, '/');
		}

		return {
			data: { email: formData.email },
			errors: { validation: 'Invalid e-mail or password' }
		};
	}
} satisfies Actions;
