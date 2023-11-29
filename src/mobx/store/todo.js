import {makeAutoObservable} from 'mobx'

class Todo {
    todo = [
        {id:1, title: 'shop1', completed: false},
        {id:2, title: 'shop2', completed: false},
        {id:3, title: 'shop3', completed: false},
    ]
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(todo){
        this.todo.push(todo)
    }

    removeTodo(id){
        this.todo = this.todo.filter(item => item.id !== id)
    }

    completeTodo(id){
        this.todo = this.todo.map(item => (item.id === id) ? {...item, completed: !item.completed} : item)
    }
}
export default new Todo()