import { writable } from 'svelte/store';
import { createRandomGroups } from '$lib/faker';
import { z } from 'zod';

export const memberSchema = z.object({
	name: z.string(),
	photo: z.string()
});

export const groupSchema = z
	.object({
		name: z.string().nonempty({
			message: 'Please insert the group name'
		}),
		description: z.string(),
		members: z.array(memberSchema)
	})
	.partial({
		description: true,
		members: true
	});

type Group = z.infer<typeof groupSchema>;

const initialGroups = createRandomGroups();
export const groups = writable(initialGroups as Group[]);
