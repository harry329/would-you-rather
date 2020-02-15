export const RECEIVE_QUESTIONS = "RECEICE_QUESTIONS";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }

}