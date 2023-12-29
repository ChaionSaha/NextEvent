import EventItem from './EventItem';

const EventList = ({ events }) => {
	return (
		<ul className='grid items-center grid-cols-2 gap-10'>
			{events.map((e, i) => (
				<EventItem key={i} {...e} />
			))}
		</ul>
	);
};

export default EventList;
