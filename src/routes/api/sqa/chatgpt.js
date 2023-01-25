import { Configuration, OpenAIApi } from "openai";
import { buildQuesResponse } from "./builderUtil.js";

// Initializations
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Fire OpenAI call with question template to get back questions and answers
async function getQuestions(inputPara) {
    console.log("Sending prompt to ChatGPT...");

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003", //"text-curie-001", //
            prompt: inputPara,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6
        });
        //console.log(`Model:${response.data.model}\nResponse:${response.data.choices[0].text}`);
        return response.data.choices[0].text;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

export async function getQuesAns() {
    const para = "You would be surprised to know that we use microbes or products  derived from them everyday. A common example is the production of curd from milk. Micro-organisms such as Lactobacillus and others commonly called lactic acid bacteria (LAB) grow in milk and convert it to curd. During growth, the LAB produce acids that coagulate and partially digest the milk proteins. A small amount of curd added to the fresh milk as inoculum or starter contain millions of LAB, which at\n    suitable temperatures multiply, thus converting milk to curd, which also improves its nutritional quality by increasing vitamin B12. In our stomach too, the LAB play very beneficial role in checking disease causing microbes. The dough, which is used for making foods such as dosa and idli is also fermented by bacteria. The puffed-up appearance of dough is due to\n    the production of CO2 gas. Can you tell which metabolic pathway is taking place resulting in the formation of CO2 ? Where do you think the bacteria for these fermentations come from? Similarly the dough, which is used for making bread, is fermented using baker’s yeast (Saccharomyces cerevisiae). A number of traditional drinks and foods are also made by fermentation by the microbes. ‘Toddy’, a traditional drink of some parts of southern India is made by fermenting sap from palms. Microbes are also used to ferment fish, soyabean and bamboo shoots to make foods. Cheese, is one of the oldest food items in which microbes were used. Different varieties of cheese are known by their characteristic texture, flavour and taste, the specificity coming from the microbes used. For example, the large holes in ‘Swiss cheese’ are due to production of a large amount of CO2 by a bacterium named Propionibacterium sharmanii. The ‘Roquefort cheese’ are ripened by growing a specific fungi on them, which gives them a particular flavour.";
    const jsonFormat = "{\"Question1\": \"What metabolic pathway is taking place resulting in the formation of CO2?\", \"Answer1\": \"The metabolic pathway taking place resulting in the formation of CO2 is fermentation.\", \"Question2\": \"Where do the bacteria for these fermentations come from?\", \"Answer2\": \"The bacteria for these fermentations come from the environment, such as soil, water, and air.\"}";
    const simpleq = `Generate 3 questions and answers for following paragraph in JSON format give here - Format: ${jsonFormat} \n `;
    //const simpleq = "Generate JSON response for 3 questions and answers as \"Question\" and \"Answer\", for following paragraph : \n ";
    const mcq = "Generate JSON response for 3 MCQ i.e. Multi-choice questions along with multiple \"options\" as well as one correct \"answer\", for following paragraph.  \n Paragraph: ";

    var q = simpleq + para + " ###";
    //var q = mcq + para + " ###";

    var qString = await getQuestions(q);

    return buildQuesResponse(qString, 0); // last parater is question type i.e. 0 - for simple questions, 1 - MCQ
}
var out = await getQuesAns();


