//import * as mongo from 'mongodb';
import db from '$lib/database.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	//const { slug } = params;

	const articles = await db.collection('blogposts').find({});

	if (articles) {
		return {
			body: articles
		};
	}
}