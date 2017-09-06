/**
 * Created by lenovo on 2017/9/6.
 */
const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    complate: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => (
                (todo.id === action.id) ? Object.assign(todo, {complate:!todo.complate}) : todo
            ));
        default:
            return state;
    }
};

export default todos;