import { SIGN_IN, SIGN_OUT} from "./user.types";

export const signinUser = (payload) => {
    return {
        type: SIGN_IN,
        payload: payload
    }
}

export const signoutUser = () => {
    return {
        type: SIGN_OUT
    }
}

