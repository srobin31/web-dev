import React from "react";
import { Link } from "react-router-dom";

import ConditionalOutput from "./conditional-output";
import Styles from "./styles";
import Classes from "./classes";
import TodoList from "./todo/todo-list";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;
