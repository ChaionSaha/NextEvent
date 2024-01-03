import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Newsletter() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ defaultValues: { email: '' } });

	const handleEmailSubmit = async (formData) => {
		await axios
			.post('/api/newsletter', formData)
			.then(() => {
				reset();
				toast.success('Email Subscribed');
			})
			.catch((err) => toast.error(err.message));
	};

	return (
		<form
			onSubmit={handleSubmit(handleEmailSubmit)}
			className='flex flex-col items-center mt-20 '
		>
			<label htmlFor='email' className='text-2xl font-bold'>
				Sign Up to stay updated!
			</label>
			<div className='flex mt-4 border lg:w-[30%] w-full'>
				<input
					type='email'
					id='email'
					className='flex-grow input rounded-e-none'
					{...register('email', { required: true })}
					placeholder='Your Email'
				/>
				<button
					className='text-white btn btn-accent rounded-s-none btn-md'
					type='submit'
				>
					Register
				</button>
			</div>
			{errors.email && <p className='mt-2 text-error'>Email is required</p>}
		</form>
	);
}

export default Newsletter;
