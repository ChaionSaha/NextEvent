const EventSummary = ({ title }) => {
	return (
		<div className='bg-gradient-to-t from-teal-800 to-teal-700 h-[35%] text-center'>
			<div className='container pt-10 text-4xl font-bold text-center text-white'>
				{title}
			</div>
		</div>
	);
};

export default EventSummary;
