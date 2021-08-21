import { CREATE_LOG, FETCH_LOG } from "../type";

const INITIAL_STATE = {
	id: null,
	userId: null,
	mandalId: null,
	checks: [],
	date: null,
	year: null,
	month: null,
	day: null,
};

const logReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_LOG:
			return { ...action.payload };
		case CREATE_LOG:
			return { ...action.payload };
		default:
			return state;
	}
};

export default logReducers;
