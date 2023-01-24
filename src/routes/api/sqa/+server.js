import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
import { getQuesAns } from "./chatgpt.js";
export async function POST({ request }) {  
  var out = await getQuesAns();
  return out;
console.log(out);
}