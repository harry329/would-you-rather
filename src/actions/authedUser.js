export const SET_AUTH_USER = "SET_AUTH_USER";

export function setAuthUser(userId) {
    return {
        type: SET_AUTH_USER,
        userId
    }
}