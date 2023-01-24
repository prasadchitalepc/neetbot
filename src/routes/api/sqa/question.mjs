export class question {
  // Question reponse consisting of correct answer, generated questions, incorrect answers (for MCQ), question type [0: single question, 1: MCQ, 2: fill in the blanks, 3: ]
  constructor(answerText, question, distractors, questionType, id) {
    this.answerText = answerText;
    this.question = question; 
    this.distractors = distractors; // List
    this.questionType = questionType;
    this.id = id;
  }
} 