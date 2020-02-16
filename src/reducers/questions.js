import {ADD_ANSWER_TO_QUESTION, ADD_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_ANSWER_TO_QUESTION:
            console.log(action.info);
            console.log(action.info.authedUser);
            console.log(action.info.qid);
            return {
                ...state,
                [action.info.qid]: {
                    ...state[action.info.qid],
                    [action.info.answer]: {
                        ...state[action.info.qid][action.info.answer],
                        votes: state[action.info.qid][action.info.answer].votes.concat(action.info.authedUser)
                    }
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.id]: action.formattedQuestion

            };
        default:
            return state
    }

}
