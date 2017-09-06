/**
 * Created by lenovo on 2017/9/6.
 */
import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onClick}) => {
    return (
       <ul>
           {todos.map(todo => {
               return <Todo {...todo} key={todo.id} onClick={onClick}/>
           })}
       </ul>
    );
};
export default TodoList;