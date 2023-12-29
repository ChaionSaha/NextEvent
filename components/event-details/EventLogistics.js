/* eslint-disable @next/next/no-img-element */
const EventLogistics = ({ img, date, location, alt }) => {
	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<div className='container px-5 lg:px-0'>
			<div className='text-white bg-gray-700 rounded-xl gap-10 p-10 flex flex-col lg:flex-row lg:w-[50%] container translate-y-[-25%]'>
				<div className='w-64 h-64 p-2 overflow-hidden bg-white rounded-full'>
					<img src={img} alt={alt} className='w-full h-full rounded-full' />
				</div>
				<div className='flex flex-col items-center justify-center text-xl text-teal-400 lg:items-start gap-y-5'>
					<div className='flex items-center gap-1 lg:items-start gap-x-2 lg:flex-col'>
						<i className='bi bi-calendar'></i>
						<p className='text-2xl'>{readableDate}</p>
					</div>
					<div className='flex items-center gap-1 lg:items-start gap-x-2 lg:flex-col'>
						<i className='bi bi-geo-alt'></i>
						<p className='italic ext-2xl'>{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventLogistics;
