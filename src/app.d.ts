import type { PrismaClient } from '@prisma/client';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type User = {
	id: number;
	role: string;
	name: string;
	email: string;
};

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null;
		}
		// interface PageData {}
		// interface Platform {}
	}

	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}

export {};
