//import * as mongo from 'mongodb';
import {connectToDB} from '$lib/database.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	//const { slug } = params;

	let db = connectToDB();
	const {data:articles, error} = await db.from('blogposts').select();

	if (articles) {
		return {
			body: articles
		};
	}
}