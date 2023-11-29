import { observer } from "mobx-react-lite";
import todo from "./store/todo";


const Todo = observer(() => {
    console.log('render')
    return(
        <div>
            {todo.todo.map(item => (
                <div key={item.id}>
                    <input type='checkbox' checked={item.completed}
                            onChange={() => todo.completeTodo(item.id)}/>
                    {item.title}
                    <button onClick={() => todo.removeTodo(item.id)}>X</button>
                </div>
            ))}
        </div>
    )
})
export default Todo