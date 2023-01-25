import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
import { getQuesAns } from "./chatgpt.js";
export async function POST({ request }) {  
  var out = await getQuesAns();
  console.log(JSON.stringify(out));
  return new Response(JSON.stringify(out));

}