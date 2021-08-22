import { FETCH_MANDAL } from "../type"

const INITIAL_STATE = {
    mandal: null,
    miniMandals: null,
}

const mandalReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MANDAL:
            return { ...action.payload }
        default:
            return state
    }
}

export default mandalReducers
