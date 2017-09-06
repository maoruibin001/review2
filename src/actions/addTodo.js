/**
 * Created by lenovo on 2017/9/6.
 */
let id = 0;
const addTodo = (text) => (
    {
        type: 'ADD_TODO',
        id: id++,
        text: text
    }
);

export default addTodo;