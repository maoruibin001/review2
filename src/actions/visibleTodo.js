/**
 * Created by lenovo on 2017/9/6.
 */
const visibleTodo = (filter) => (
    {
        type: 'VISIBLE_TODO',
        filter
    }
);

export default visibleTodo;