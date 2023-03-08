const sleep = (ms = 1500) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep };
