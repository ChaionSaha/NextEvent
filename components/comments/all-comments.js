import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddComment from './add-comment';
import CommentsItem from './comment-item';

function AllComments({ id }) {
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (showComments) {
			axios(`/api/comments/${id}`)
				.then((data) => {
					setComments(data.data);
				})
				.catch((err) => toast.error(err.message));
		}
	}, [showComments, id]);

	return (
		<div className='flex flex-col items-center pb-10 mt-16'>
			<button
				onClick={() => setShowComments(!showComments)}
				className='btn btn-outline btn-accent'
			>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			<div
				className={`${showComments ? '' : 'hidden'} mt-10 w-full lg:w-[45%]`}
			>
				<AddComment id={id} setComments={setComments} />
				<CommentsItem comments={comments} />
			</div>
		</div>
	);
}

export default AllComments;
