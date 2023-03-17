import { writable } from 'svelte/store';
import { createRandomGroups } from '$lib/faker';
import { z } from 'zod';

export const memberSchema = z.object({
	name: z.string(),
	photo: z.string()
});

export const createGroupSchema = z
	.object({
		name: z.string().nonempty({
			message: 'Please insert the group name'
		}),
		description: z.string(),
		members: z.array(memberSchema)
	})
	.partial({
		description: true
	});

export const groupSchema = createGroupSchema.extend({
	id: z.string().nonempty()
});

export type Group = z.infer<typeof groupSchema>;
export type Groups = Group[];

const initialGroups = createRandomGroups();
export const groups = writable(initialGroups as Groups);
