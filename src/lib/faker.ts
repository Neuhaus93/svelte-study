import { faker } from '@faker-js/faker';

const sleep = (ms = 1000) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

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
	const qty = faker.datatype.number(5);

	return [...Array(qty)].map(() => ({
		name: faker.commerce.productName(),
		description: faker.random.words(5)
	}));
};
