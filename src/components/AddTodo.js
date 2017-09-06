/**
 * Created by lenovo on 2017/9/6.
 */
import React from 'react';

const AddTodo = ({onClick}) => {
    let input = '';
    return (
        <div>
            <form action="" onSubmit={e => {
                e.preventDefault();
                if (input.value.trim()) {
                    onClick(input.value);
                    input.value = '';
                }
            }}>
                <input type="text"  ref={node=>{input=node}}/>
                <input type="submit" value='ok'/>
            </form>
        </div>
    )
}

export default AddTodo;