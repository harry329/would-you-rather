import {getInitialData, saveQuestion, saveQuestionAnswer} from "../utils/api";
import {addAnswerToUser, addQuestionToUser, receiveUsers} from "./users";
import {addAnswerToQuestion, addQuestion, receiveQuestions} from "./questions";

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

export function saveQuestionFromUser(question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then((res) => {
                console.log(" I am coming form api");
                console.log(res);
                dispatch(addQuestion(res));
                dispatch(addQuestionToUser(res))
            })
    }

}