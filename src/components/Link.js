/**
 * Created by lenovo on 2017/9/6.
 */
import React from 'react';


const Link = ({active, onClick, children}) => {
    if (active) {
        return <span>{children}</span>
    }

    return <a href="" onClick={e => {
        e.preventDefault();
        onClick();
    }}>{children}</a>
};

export default Link;