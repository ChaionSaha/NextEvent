import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function AddComment({ id, setComments }) {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: { name: '', email: '', comment: '' },
	});

	const handleSubmitComment = async (formData) => {
		setLoading(true);
		const { data } = await axios
			.post(`/api/comments/${id}`, formData)
			.catch((err) => toast.error(err.message));
		if (data) {
			setComments(data);
			reset();
			toast.success('Comment Received!');
		}
		setLoading(false);
	};
	return (
		<form
			className='grid p-4 border rounded-lg lg:grid-cols-2 gap-y-5 gap-x-10 bg-accent'
			onSubmit={handleSubmit(handleSubmitComment)}
		>
			<div className='flex flex-col gap-y-1'>
				<label htmlFor='email'>Your Email</label>
				<input
					type='email'
					className='input'
					id='email'
					placeholder='Your Email'
					{...register('email', { required: true })}
				/>
			</div>
			<div className='flex flex-col gap-y-1'>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					className='input'
					placeholder='Your Name'
					id='name'
					{...register('name', { required: true })}
				/>
			</div>
			<div className='flex flex-col lg:col-span-2 gap-y-1'>
				<label htmlFor='comment'>Your Comment</label>
				<textarea
					type='text'
					id='comment'
					className='textarea h-44'
					placeholder='Your Comment'
					{...register('comment', { required: true })}
				/>
			</div>
			<div className='flex mt-5 lg:justify-center lg:col-span-2'>
				<button
					className='w-full btn btn-outline lg:w-fit'
					type='submit'
					disabled={loading}
				>
					{loading ? (
						<span className='loading loading-spinner'></span>
					) : (
						'Submit'
					)}
				</button>
			</div>
		</form>
	);
}

export default AddComment;
