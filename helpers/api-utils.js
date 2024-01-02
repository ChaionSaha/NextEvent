import axios from 'axios';

export async function getAllEvents() {
	const { data } = await axios(
		'https://ema-john-simple-928c9-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
	);

	return data;
}

export async function getFetauredEvents() {
	const data = await getAllEvents();
	return data.filter((d) => d.isFeatured === true);
}

export async function getEventById(id) {
	const data = await getAllEvents();
	return data.filter((d) => d.id === id);
}

export async function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;
	const data = await getAllEvents();

	let filteredEvents = data.filter((d) => {
		let date = new Date(d.date);
		return date.getFullYear() === +year && date.getMonth() === +month - 1;
	});

	return filteredEvents;
}
