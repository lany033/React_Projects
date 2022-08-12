import { combineReducers } from "redux";
import { todosReducer } from "./todoReducer";
import { filterState } from "./filterReducer";


export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterState
    }
)