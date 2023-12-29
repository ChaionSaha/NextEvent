import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/dummy-data';

function EventsPage() {
	const events = getAllEvents();
	return (
		<div className='container py-10'>
			<EventList events={events} />
		</div>
	);
}

export default EventsPage;
