import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const response = await fetch('https://gleaming-sandals-duck.cyclic.app/genQuestions', {
    method: 'POST',
    body: JSON.stringify({"text": "You would be surprised to know that we use microbes or products  derived from them everyday. A common example is the production of curd from milk. Micro-organisms such as Lactobacillus and others commonly called lactic acid bacteria (LAB) grow in milk and convert it to curd. During growth, the LAB produce acids that coagulate and partially digest the milk proteins. A small amount of curd added to the fresh milk as inoculum or starter contain millions of LAB, which at\n    suitable temperatures multiply, thus converting milk to curd, which also improves its nutritional quality by increasing vitamin B12. In our stomach too, the LAB play very beneficial role in checking disease causing microbes. The dough, which is used for making foods such as dosa and idli is also fermented by bacteria. The puffed-up appearance of dough is due to\n    the production of CO2 gas. Can you tell which metabolic pathway is taking place resulting in the formation of CO2 ? Where do you think the bacteria for these fermentations come from? Similarly the dough, which is used for making bread, is fermented using baker’s yeast (Saccharomyces cerevisiae). A number of traditional drinks and foods are also made by fermentation by the microbes. ‘Toddy’, a traditional drink of some parts of southern India is made by fermenting sap from palms. Microbes are also used to ferment fish, soyabean and bamboo shoots to make foods. Cheese, is one of the oldest food items in which microbes were used. Different varieties of cheese are known by their characteristic texture, flavour and taste, the specificity coming from the microbes used. For example, the large holes in ‘Swiss cheese’ are due to production of a large amount of CO2 by a bacterium named Propionibacterium sharmanii. The ‘Roquefort cheese’ are ripened by growing a specific fungi on them, which gives them a particular flavour.",
    "title": "",
    "count": 3,
    "questionType": 0}),
    headers: {
      'content-type': 'application/json'
    }
  });

  total = await response.json();
  return total;
}