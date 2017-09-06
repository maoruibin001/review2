/**
 * Created by lenovo on 2017/9/6.
 */
import {combineReducers} from 'redux';

import todos from './todos';
import visibleTodoFilter from './visibleTodo';


const reducers = combineReducers({
    todos,
    visibleTodoFilter
});

export default reducers;