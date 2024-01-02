import EventList from '@/components/events/EventList';
import CustomHead from '@/components/shared/head';
import { getAllEvents } from '@/helpers/api-utils';

function EventsPage({ events }) {
	return (
		<div className='container px-5 py-10 lg:px-0'>
			<CustomHead title='All EVents' />
			<EventList events={events} />
		</div>
	);
}

export default EventsPage;

export async function getStaticProps() {
	const events = await getAllEvents();
	return {
		props: {
			events: events,
		},
		revalidate: 60,
	};
}
