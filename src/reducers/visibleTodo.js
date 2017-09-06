/**
 * Created by lenovo on 2017/9/6.
 */
const visibleTodo = (state='SHOW_ALL', action) => {
    switch (action.type) {
        case "VISIBLE_TODO":
            return action.filter;
        default:
            return state;
    }
}

export default visibleTodo;