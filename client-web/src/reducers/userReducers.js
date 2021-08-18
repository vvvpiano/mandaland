import _ from 'lodash';
import { SIGN_IN, SIGN_OUT } from "../type";

const INITIAL_STATE = {
    id: null,
    isSignedIn: false,
    userId: null,
    email: null,
    name: null,
    imagePath: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, ...action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, ...INITIAL_STATE };
        default:
            return state;
    }
}