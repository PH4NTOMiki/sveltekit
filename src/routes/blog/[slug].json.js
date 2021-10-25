import * as mongo from 'mongodb';


export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	let client = await mongo.MongoClient.connect("mongodb://localhost");
    let db = client.db("sveltekit1");
	let collection = db.collection('blogposts');
	const article = await collection.findOne({ slug });

	if (article) {
		return {
			body: article
		};
	}
}