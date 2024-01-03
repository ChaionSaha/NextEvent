function CommentsItem({ comments }) {
	return (
		<div className='flex flex-col mt-10 gap-y-5'>
			{comments.map((c, i) => {
				return (
					<div
						key={i}
						className='flex flex-col p-3 border-b border-gray-300 gap-y-3'
					>
						<div className='self-start text-xl'>{c.comment}</div>
						<div className='self-end italic'>by {c.name}</div>
					</div>
				);
			})}
		</div>
	);
}

export default CommentsItem;
