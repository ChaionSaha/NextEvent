import Link from 'next/link';
const Header = () => {
	return (
		<div className='bg-base-100'>
			<div className='container flex justify-between py-5 text-xl'>
				<Link href='/'>Home</Link>
				<div className='flex gap-x-10'>
					<Link href='/'>Featured Events</Link>
					<Link href='/events'>All Events</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
