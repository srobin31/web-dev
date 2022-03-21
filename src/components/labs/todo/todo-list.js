import TodoItem from "./todo-item.js";
import todos from "./todos.json";

const TodoList = () => {
    return (
        <ul>
            {todos.map(todo => {
                return(<TodoItem todo={todo}/>);
            })}
        </ul>
    );
}
export default TodoList;