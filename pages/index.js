import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div className='container py-10'>
			<EventList events={featuredEvents} />
		</div>
	);
}

export default HomePage;
