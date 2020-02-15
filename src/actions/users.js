export const RECEIVE_USERS = "ADD_USERS";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}