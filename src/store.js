import { createStore } from "redux";
import reducer from "./reducers/movieReducer";

export default createStore(reducer);