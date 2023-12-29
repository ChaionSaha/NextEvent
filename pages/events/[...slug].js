import EventList from '@/components/events/EventList';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

function CustomEvents() {
	const router = useRouter();
	const { slug } = router.query;
	let year, month;
	if (slug) {
		year = +slug[0];
		month = +slug[1];
	}

	if (
		isNaN(year) ||
		isNaN(month) ||
		year < 2021 ||
		year > 2023 ||
		month < 1 ||
		month > 12
	)
		return (
			<div className='container w-[50%] py-10 text-center rounded-xl bg-red-100 text-xl text-red-800 my-10'>
				Invalid search.
			</div>
		);

	const events = getFilteredEvents({ year, month });

	if (events.length === 0)
		return (
			<div className='container w-[50%] py-10 text-center rounded-xl border text-green-800 border-red-100 bg-base-100 text-xl my-10'>
				No Events found on that specified date.
			</div>
		);

	return (
		<div className='container py-10'>
			<EventList events={events} />
		</div>
	);
}

export default CustomEvents;
