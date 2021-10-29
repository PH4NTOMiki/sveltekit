import * as mongo from 'mongodb';

let client = null;
let db = null;
/**
 * 
 * @returns {{client: mongo.MongoClient, db: mongo.Db}}
 */
export async function connectToDB() {
  if(!client) {
    client = await mongo.MongoClient.connect(process.env['VITE_MONGODB_URI'] || import.meta.env.VITE_MONGODB_URI);
    db = client.db("sveltekit1");
  }
  return { client, db }
}