import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5qeb3yw.mongodb.net/?retryWrites=true&w=majority`
		);
		const newsletterCollection = client
			.db('eventCalender')
			.collection('newsletter');
		const result = await newsletterCollection.insertOne(req.body);
		client.close();
		res.status(200).send(result);
	}
}
