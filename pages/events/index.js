import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/dummy-data';

function EventsPage() {
	const events = getAllEvents();
	return (
		<div className='container px-5 py-10 lg:px-0'>
			<EventList events={events} />
		</div>
	);
}

export default EventsPage;
