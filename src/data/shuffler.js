export const shuffle = items => {
	let i;
	let j;
	let temp;
	const shuffledItems = items;
	for (i = shuffledItems.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = shuffledItems[i];
		shuffledItems[i] = shuffledItems[j];
		shuffledItems[j] = temp;
	}
	return shuffledItems;
};
