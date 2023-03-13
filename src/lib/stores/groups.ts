import { writable } from 'svelte/store';
import { z } from 'zod';

export const groupSchema = z
	.object({
		name: z.string().nonempty({
			message: 'Please insert the group name'
		}),
		description: z.string(),
		category: z.string()
	})
	.partial({
		description: true,
		category: true
	});

type Group = z.infer<typeof groupSchema>;

export const groups = writable([] as Group[]);
