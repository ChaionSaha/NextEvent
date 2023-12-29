/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const EventItem = ({ title, location, date, image, id }) => {
	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	return (
		<div className='flex overflow-hidden bg-white rounded-xl '>
			<img
				src={image}
				alt={title}
				className='object-cover object-center  w-[40%]'
			/>

			<div className='flex flex-col p-2 px-5'>
				<p className='mb-3 text-xl font-bold'>{title}</p>
				<p className='flex items-center mb-1 text-lg font-bold text-gray-500 gap-x-2'>
					<i className='bi bi-calendar3'></i>
					{readableDate}
				</p>
				<p className='flex items-center mb-5 italic text-gray-500 gap-x-2'>
					<i className='bi bi-geo-alt'></i>
					{location}
				</p>
				<Link
					href={`/events/${id}`}
					className='text-white btn w-fit btn-accent'
				>
					Explore Event
					<i className='bi bi-arrow-right'></i>
				</Link>
			</div>
		</div>
	);
};

export default EventItem;
