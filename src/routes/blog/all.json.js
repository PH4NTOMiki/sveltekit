//import * as mongo from 'mongodb';
import {connectToDB} from '$lib/database.js';


export async function get() {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	//const { slug } = params;

	let { client, db } = await connectToDB();
	let collection = db.collection('blogposts');
	const articles = await collection.find({}).toArray();

	if (articles) {
		return {
			body: articles
		};
	}
}