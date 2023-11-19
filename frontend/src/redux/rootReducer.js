// ** Reducers Imports
import navbar from "./navbar";
import layout from "./layout";
import auth from "./authentication";
import UserReducer from "../Reducers/UserReducer";

const rootReducer = { UserReducer, auth, navbar, layout };

export default rootReducer;
