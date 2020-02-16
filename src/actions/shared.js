import {getInitialData, saveQuestionAnswer} from "../utils/api";
import {addAnswerToUser, receiveUsers} from "./users";
import {addAnswerToQuestion, receiveQuestions} from "./questions";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions))
            })
    }

}

export function saveAnswerToQuestion(info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(addAnswerToQuestion(info));
                dispatch(addAnswerToUser(info))
            })
    }
}