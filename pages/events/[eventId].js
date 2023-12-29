import EventLogistics from '@/components/event-details/EventLogistics';
import EventSummary from '@/components/event-details/EventSummary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';

function EventDetails() {
	const router = useRouter();
	const { eventId } = router.query;

	const event = getEventById(eventId)[0];
	console.log(event);
	if (!event) return <p>No event found!</p>;

	return (
		<div className='h-[90vh]'>
			<EventSummary title={event.title} />
			<EventLogistics
				img={event.image}
				alt={event.title}
				date={event.date}
				location={event.location}
			/>
		</div>
	);
}

export default EventDetails;
