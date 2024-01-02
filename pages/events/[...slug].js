import EventList from '@/components/events/EventList';
import CustomHead from '@/components/shared/head';
import { getFilteredEvents } from '@/helpers/api-utils';

function CustomEvents({ hasError, events }) {
	if (hasError)
		return (
			<div className='container lg:w-[50%]  px-5 lg:px-0'>
				<CustomHead title='Invalid Search' />
				<div className='w-full py-10 my-10 text-xl text-center text-red-800 bg-red-100 rounded-xl'>
					Invalid search.
				</div>
			</div>
		);

	if (events.length === 0)
		return (
			<div className='container lg:w-[50%] px-5 lg:px-0 my-10'>
				<CustomHead title='No events' />
				<div className='w-full py-10 text-xl text-center text-green-800 border border-red-100 rounded-xl bg-base-100'>
					No Events found on that specified date.
				</div>
			</div>
		);

	return (
		<div className='container px-5 py-10 lg:px-0'>
			<CustomHead title='Filtered Events' />
			<EventList events={events} />
		</div>
	);
}

export default CustomEvents;

export async function getServerSideProps({ params }) {
	const [year, month] = params.slug;

	if (
		isNaN(year) ||
		isNaN(month) ||
		year < 2021 ||
		year > 2023 ||
		month < 1 ||
		month > 12
	)
		return {
			props: {
				hasError: true,
			},
		};

	const events = await getFilteredEvents({ year, month });
	console.log(events);
	return {
		props: {
			events: events,
		},
	};
}
