import { writable } from 'svelte/store';
import { createRandomGroups } from '$lib/faker';
import { z } from 'zod';

export const groupSchema = z
	.object({
		name: z.string().nonempty({
			message: 'Please insert the group name'
		}),
		description: z.string()
	})
	.partial({
		description: true
	});

type Group = z.infer<typeof groupSchema>;

export const groups = writable(createRandomGroups() as Group[]);
