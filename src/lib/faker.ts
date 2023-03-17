import { faker } from '@faker-js/faker';
import { generateUUID } from '$lib/utils';

// const sleep = (ms = 1000) => {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// };

export const createRandomUser = () => {
	return {
		_id: faker.datatype.uuid(),
		avatar: faker.image.avatar(),
		email: faker.internet.email(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName()
	};
};

export const createRandomGroups = () => {
	const qty = faker.datatype.number({ min: 1, max: 5 });

	return [...Array(qty)].map(() => {
		const memberQty = faker.datatype.number({ max: 4 });

		return {
			id: generateUUID(),
			name: faker.commerce.productName(),
			description: faker.random.words(5),
			members: [...Array(memberQty)].map(() => ({
				name: faker.name.fullName(),
				photo: faker.image.avatar()
			}))
		};
	});
};
