/**
 * Created by lenovo on 2017/9/6.
 */
import React from 'react';


const Todo = ({text, onClick, id, complate}) => {
    return <li style={{'textDecoration': complate ? 'line-through' : 'none'}} onClick={()=> {
        onClick(id)
    }}>{text}</li>
};

export default Todo;