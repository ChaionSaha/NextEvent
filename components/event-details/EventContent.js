const EventContent = ({ content }) => {
	return (
		<div className='container px-5 lg:w-[50%] lg:px-0'>
			<div className=' text-center w-full  translate-y-[-20%] text-xl'>
				{content}
			</div>
		</div>
	);
};

export default EventContent;
