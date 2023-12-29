import EventItem from './EventItem';

const EventList = ({ events }) => {
	return (
		<ul className='grid items-center gap-10 lg:grid-cols-2'>
			{events.map((e, i) => (
				<EventItem key={i} {...e} />
			))}
		</ul>
	);
};

export default EventList;
