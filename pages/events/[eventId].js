import EventContent from '@/components/event-details/EventContent';
import EventLogistics from '@/components/event-details/EventLogistics';
import EventSummary from '@/components/event-details/EventSummary';
import CustomHead from '@/components/shared/head';
import { getEventById } from '@/helpers/api-utils';

function EventDetails({ event }) {
	if (!event) return <p>No event found!</p>;

	return (
		<div className='h-[90vh]'>
			<CustomHead title={event.title} />
			<EventSummary title={event.title} />
			<EventLogistics
				img={event.image}
				alt={event.title}
				date={event.date}
				location={event.location}
			/>
			<EventContent content={event.description} />
		</div>
	);
}

export default EventDetails;

export async function getServerSideProps({ params }) {
	const event = await getEventById(params.eventId);

	return {
		props: {
			event: event[0],
		},
	};
}
