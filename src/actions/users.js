export const RECEIVE_USERS = "ADD_USERS";
export const ADD_ANS_TO_USER = "ADD_ANS_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToUser(info) {
    return {
        type: ADD_ANS_TO_USER,
        info
    }
}


export function addQuestionToUser(formattedQuestion) {
    return {
        type: ADD_QUESTION_TO_USER,
        formattedQuestion
    }

}