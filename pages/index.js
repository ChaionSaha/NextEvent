import EventList from '@/components/events/EventList';
import CustomHead from '@/components/shared/head';
import { getFetauredEvents } from '@/helpers/api-utils';

function HomePage({ events }) {
	// const featuredEvents = getFeaturedEvents();
	return (
		<div className='container px-5 py-10 lg:px-0'>
			<CustomHead title='Featured Events' />
			<EventList events={events} />
		</div>
	);
}

export default HomePage;

export async function getStaticProps() {
	const events = await getFetauredEvents();

	return {
		props: {
			events: events,
		},
	};
}
