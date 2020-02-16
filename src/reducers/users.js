import {ADD_ANS_TO_USER, RECEIVE_USERS} from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_ANS_TO_USER:
            return {
                ...state,
                [action.info.authedUser]: {
                    ...state[action.info.authedUser],
                    answers: {
                        ...state[action.info.authedUser].answers,
                        [action.info.qid]: action.info.answer
                    }
                }
            };
        default:
            return state
    }
}