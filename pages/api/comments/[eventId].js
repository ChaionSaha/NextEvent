import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	const eventId = req.query.eventId;

	if (req.method === 'POST') {
		let comment = req.body;
		comment.eventId = eventId;
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5qeb3yw.mongodb.net/?retryWrites=true&w=majority`
		);

		const commentsCollection = client
			.db('eventCalender')
			.collection('comments');
		await commentsCollection.insertOne(comment);
		const comments = await commentsCollection
			.find({ eventId: eventId })
			.toArray();
		client.close();

		res.status(200).send(comments);
	}
	if (req.method === 'GET') {
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5qeb3yw.mongodb.net/?retryWrites=true&w=majority`
		);

		const commentsCollection = client
			.db('eventCalender')
			.collection('comments');
		const comments = await commentsCollection
			.find({ eventId: eventId })
			.toArray();
		client.close();
		res.status(200).send(comments);
	}
}
