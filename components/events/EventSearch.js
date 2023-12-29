import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const EventSearch = () => {
	const { register, handleSubmit } = useForm();
	const router = useRouter();

	const onSubmit = (data) => {
		const { year, month } = data;
		router.push(`/events/${year}/${month}`);
	};
	return (
		<form className='flex gap-x-2' onSubmit={handleSubmit(onSubmit)}>
			<select {...register('year')} className='select select-bordered'>
				{['2021', '2022', '2023'].map((y, i) => (
					<option key={i} value={y}>
						{y}
					</option>
				))}
			</select>

			<select {...register('month')} className='select select-bordered'>
				{[
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				].map((m, i) => (
					<option value={i + 1} key={i}>
						{m}
					</option>
				))}
			</select>
			<button className='btn btn-primary'>Search</button>
		</form>
	);
};

export default EventSearch;
