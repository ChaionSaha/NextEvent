import Link from 'next/link';
import EventSearch from '../events/EventSearch';
const Header = () => {
	return (
		<div className='bg-base-100'>
			<div className='container flex items-center justify-between py-5 text-lg'>
				<p className='text-2xl font-bold'>Event Calendar</p>
				<div className='flex gap-x-10'>
					<Link className='duration-150 hover:underline' href='/'>
						Featured Events
					</Link>
					<Link className='duration-150 hover:underline' href='/events'>
						All Events
					</Link>
				</div>
				<EventSearch />
			</div>
		</div>
	);
};

export default Header;
