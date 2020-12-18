import { SIGN_IN, SIGN_OUT } from './user.types';

const INITIAL_STATE = {
    user: ''
};

const reducer = (state = INITIAL_STATE, action, payload) => {
    switch (action.type) {
        case SIGN_IN:
           return {
             payload: payload
           };
        case SIGN_OUT:
           return null;
         default: return state;
    }
};
export default reducer;