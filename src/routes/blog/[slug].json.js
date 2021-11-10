//import * as mongo from 'mongodb';
import {connectToDB} from '$lib/database.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	let db = connectToDB();
	const {data:article, error} = await db.from('blogposts').select().eq('slug',slug).single();

	if (article) {
		return {
			body: article
		};
	}
}