//import * as mongo from 'mongodb';
import {connectToDB} from '$lib/database.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	let { client, db } = await connectToDB();
	let collection = db.collection('blogposts');
	const article = await collection.findOne({ slug });

	if (article) {
		return {
			body: article
		};
	}
}