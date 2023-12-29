import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div className='container px-5 py-10 lg:px-0'>
			<EventList events={featuredEvents} />
		</div>
	);
}

export default HomePage;
