import { question } from "./question.mjs";

/**
 * 
 * @param {string} qString
 * @returns question[] Array of qustions generated with answers
 */
export function buildQuesResponse(qString, questionType) {

    var cleanString = prepJson(qString, questionType);
    
    // Convert to ES object
    var tempJson ;
    try {
        tempJson = JSON.parse(cleanString);
    } catch (error) {
        console.log(error.message);
        tempJson = cleanString; // Initialize before sending
    }
    // Build Question object
    return buildQuesResponseFinal(tempJson, questionType);
}

function prepJson(qString, questionType) {
    // Remove \n and replace \" with plain "
    var cleanString = qString.replace(/\n/gi, "")
                             .replace(/\"/gi, '"');
    // Add curly brackets if missing
    // if (cleanString.search(/{/gi) >= 0) {
    //     cleanString.replace(/^"/gi, "{");
    //     cleanString.replace(/$"/gi, "}");
    // }

    // Add square brackets if missing esp for MCQ type=1
    if (questionType == 1 && cleanString.search(/^\[/gi) == -1)
        cleanString = "[" + cleanString + "]"
    
    // Add curly brackets if missing esp for Simple question requiring additional question gen
    if (questionType == 0 && cleanString.search(/^\{/gi) == -1)
        cleanString = "{" + cleanString + "}"

    return cleanString;
}

function buildQuesResponseFinal(tempJson, questionType) {
    if (questionType == 0)
        return buildSimpleQuesResponse(tempJson, questionType);
    else if (questionType == 1)
        return buildMCQResponse(tempJson, questionType);
    else return tempJson;
}

function buildMCQResponse(tempJson, questionType) {
    var quesRes = [];
    for (var i = 0; i < tempJson.length; i++) {
        //answerText, question, distractors, questionType
        quesRes[i] = new question(tempJson[i].answer, tempJson[i].question, tempJson[i].options, questionType);
    }
    return quesRes;
}

function buildSimpleQuesResponse(tempJson, questionType) {
    var quesRes = [];
    var queAnsCount = 0;
    var ansKey = "";
    for (const key of Object.keys(tempJson)) {
        if (key.startsWith("Question")) {
            //answerText, question, distractors, questionType
            ansKey = key.replace(/Question/gi, "Answer");
            quesRes[queAnsCount++] = new question(tempJson[ansKey], tempJson[key], "", questionType);
        }
    }

    if (quesRes == null) quesRes = tempJson;

    return quesRes;
}

/* tempJson example:
[
    {
        "question": "Which metabolic pathway is taking place resulting in the formation of CO2?",
        "options": [
            "Glycolysis",
            "Krebs Cycle",
            "Fermentation",
            "Photosynthesis"
        ],
        "answer": "Fermentation"
    },
*/
/* MCQ question example
[]    {
        "answerText": "",
        "question": "",
        "distractors": ["", ""],
        "questionType": 0
    },
*/
/* Simple Question example
{
    "Question1": "What metabolic pathway is taking place resulting in the formation of CO2?",
    "Answer1": "The metabolic pathway taking place resulting in the formation of CO2 is fermentation.",
    "Question2": "Where do the bacteria for these fermentations come from?",
    "Answer2": "The bacteria for these fermentations come from the environment, such as soil, water, and air.",
*/