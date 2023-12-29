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
			<div className='container lg:w-[50%]  px-5 lg:px-0'>
				<div className='w-full py-10 my-10 text-xl text-center text-red-800 bg-red-100 rounded-xl'>
					Invalid search.
				</div>
			</div>
		);

	const events = getFilteredEvents({ year, month });

	if (events.length === 0)
		return (
			<div className='container lg:w-[50%] px-5 lg:px-0 my-10'>
				<div className='w-full py-10 text-xl text-center text-green-800 border border-red-100 rounded-xl bg-base-100'>
					No Events found on that specified date.
				</div>
			</div>
		);

	return (
		<div className='container px-5 py-10 lg:px-0'>
			<EventList events={events} />
		</div>
	);
}

export default CustomEvents;
