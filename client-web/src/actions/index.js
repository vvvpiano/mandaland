import history from "../history";
import server from "../apis/server";
import {SIGN_IN, SIGN_OUT} from "../type";

export const signIn = (userInfo) => async (dispatch) => {
    const [ userId, email, name, imagePath ] = userInfo;
    const { data } = await server.post('/login/google', {userId, email, name, imagePath});
	dispatch({ type: SIGN_IN, payload: data[0]});
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}