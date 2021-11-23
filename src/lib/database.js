import Mongo from '@ph4ntomiki/mongodb-data-api-client';
const [mongoDataAppId, mongoDataApiKey] = (typeof(VITE_MONGO)!=='undefined'?VITE_MONGO: import.meta.env.VITE_MONGO).split('::::');
const client = new Mongo(mongoDataAppId, mongoDataApiKey, true);
client._fetch = fetch.bind(self);
const db = client.db('mongotesting');

export default db;