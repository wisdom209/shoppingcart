import Cookie from "js-cookie";

export const SET_GLOBAL_NAME = "SET_GLOBAL_NAME";

const GlobalNameReducer = (state = Cookie.get("globalName") || "", { type, payload }) => {
    switch (type) {
        case SET_GLOBAL_NAME:
            return payload;
        default:
            return state;
    }
};

export default GlobalNameReducer;
