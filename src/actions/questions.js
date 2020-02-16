export const RECEIVE_QUESTIONS = "RECEICE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addAnswerToQuestion(info) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        info
    }
}

export function addQuestion(formattedQuestion) {
    return {
        type: ADD_QUESTION,
        formattedQuestion
    }

}