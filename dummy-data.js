const data = [
	{
		id: '658ea74f3183536c3ae5e5cb',
		title: 'Corporate Factors Officer',
		description: 'International',
		location: '6754 Otho Freeway',
		date: '2021-08-06T04:29:53.353Z',
		image: 'https://picsum.photos/seed/5EJOIIa/640/480',
		isFeatured: false,
	},
	{
		id: '658ea74f3183536c3ae5e5cc',
		title: 'Global Mobility Specialist',
		description: 'Customer',
		location: '1010 Margret Falls',
		date: '2021-01-29T15:49:10.999Z',
		image: 'https://loremflickr.com/640/480?lock=4807995301036032',
		isFeatured: true,
	},
	{
		id: '658ea74f3183536c3ae5e5cd',
		title: 'Future Interactions Assistant',
		description: 'Future',
		location: '629 Dibbert Street',
		date: '2023-05-13T06:17:49.129Z',
		image: 'https://picsum.photos/seed/30Ja5ZGivs/640/480',
		isFeatured: false,
	},
	{
		id: '658ea74f3183536c3ae5e5ce',
		title: 'Lead Infrastructure Strategist',
		description: 'Dynamic',
		location: '23626 Metz Radial',
		date: '2021-03-25T19:47:49.193Z',
		image: 'https://picsum.photos/seed/WcdIEMN/640/480',
		isFeatured: true,
	},
	{
		id: '658ea74f3183536c3ae5e5cf',
		title: 'Investor Infrastructure Representative',
		description: 'Future',
		location: '7163 Dorris Stream',
		date: '2023-06-30T14:53:50.061Z',
		image: 'https://loremflickr.com/640/480?lock=5300263189479424',
		isFeatured: false,
	},
	{
		id: '658ea74f3183536c3ae5e5d0',
		title: 'Regional Paradigm Technician',
		description: 'Customer',
		location: '3427 Hagenes Spring',
		date: '2023-04-27T15:44:59.156Z',
		image: 'https://picsum.photos/seed/aGz7bhoRkU/640/480',
		isFeatured: false,
	},
	{
		id: '658ea74f3183536c3ae5e5d1',
		title: 'Global Integration Technician',
		description: 'Human',
		location: '8265 Becker Valleys',
		date: '2023-01-14T23:56:04.131Z',
		image: 'https://picsum.photos/seed/cTsuUG/640/480',
		isFeatured: false,
	},
	{
		id: '658ea74f3183536c3ae5e5d2',
		title: 'Customer Directives Coordinator',
		description: 'District',
		location: '37183 Schmidt Fort',
		date: '2021-09-11T11:40:22.008Z',
		image: 'https://loremflickr.com/640/480?lock=6513761907113984',
		isFeatured: true,
	},
	{
		id: '658ea74f3183536c3ae5e5d3',
		title: 'Central Interactions Engineer',
		description: 'Principal',
		location: '512 Adah Avenue',
		date: '2022-01-01T01:59:54.961Z',
		image: 'https://loremflickr.com/640/480?lock=1862255662596096',
		isFeatured: true,
	},
	{
		id: '658ea74f3183536c3ae5e5d4',
		title: 'Investor Accounts Developer',
		description: 'International',
		location: '68343 Libby Light',
		date: '2022-07-05T04:16:09.474Z',
		image: 'https://loremflickr.com/640/480?lock=6256622219296768',
		isFeatured: false,
	},
];

export function getFeaturedEvents() {
	return data.filter((d) => d.isFeatured === true);
}

export function getAllEvents() {
	return data;
}

export function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	let filteredEvents = data.filter((d) => {
		let date = new Date(d.date);
		return date.getFullYear() === year && date.getMonth() === month - 1;
	});

	return filteredEvents;
}

export function getEventById(id) {
	return data.filter((d) => d.id === id);
}
