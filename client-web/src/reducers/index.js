import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import userReducers from "./userReducers"
import mandalReducers from "./mandalReducers"
import logReducers from "./logReducers"

export default combineReducers({
    user: userReducers,
    mandal: mandalReducers,
    log: logReducers,
    form: formReducer,
})
