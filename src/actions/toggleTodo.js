/**
 * Created by lenovo on 2017/9/6.
 */
const toggleTodo = (id) => (
    {
        type: 'TOGGLE_TODO',
        id
    }
);

export default toggleTodo;