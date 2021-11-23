//import * as mongo from 'mongodb';
import db from '$lib/database.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	const article = await db.collection('blogposts').findOne({slug});

	if (article) {
		return {
			body: article
		};
	}
}