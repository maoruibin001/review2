/**
 * Created by lenovo on 2017/9/6.
 */
import toggleTodo from '../actions/toggleTodo';
import {connect} from 'react-redux';
import Todos from '../components/TodoList';

const getVisibleTodos = (todos, visibleTodoFilter) => {
    switch (visibleTodoFilter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETE":
            return todos.filter(e => e.complate);
        case "SHOW_ACTIVE":
            return todos.filter(e => !e.complate);
        default:
            return todos;
    }
}
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibleTodoFilter)
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(toggleTodo(id))
        }
    };
};


const TodoList = connect(
    mapStateToProps,
    mapDispathToProps
)(Todos);

export default TodoList;