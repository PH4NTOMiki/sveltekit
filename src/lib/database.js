import {createClient, SupabaseClient} from '@supabase/supabase-js';
/*const obj = typeof(self)!=='undefined'&&self.fetch ? {'fetch':self.fetch} : {};*/
const [supabaseUrl, supabaseToken] = (typeof(VITE_SUPABASE)!=='undefined'?VITE_SUPABASE: import.meta.env.VITE_SUPABASE).split('::::');
const client = createClient(supabaseUrl, supabaseToken, {'fetch':fetch.bind(self)});
/**
 * 
 * @returns {SupabaseClient}
 */
export function connectToDB(){
  return client;
}