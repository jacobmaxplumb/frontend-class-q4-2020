import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [
    {completed: false, task: 'get food'},
    {completed: false, task: 'go to bed'},
    {completed: true, task: 'wake up'}
  ];

  filteredTodos: Todo[] = [];

  taskName: string = '';
  filterValue: string = '';

  constructor() { }

  ngOnInit() {
    this.filteredTodos = this.todos;
  }

  filterTodos(): void {
    console.log('hit');
    console.log(this.filterValue)
    this.filteredTodos = this.todos.filter(todo => todo.task.includes(this.filterValue));
  }

  completeClicked(todoItem: Todo) {
    todoItem.completed = true;
  }

  deleteTodo(i: number): void {
    this.todos.splice(i, 1);
    this.filteredTodos = this.todos;
    this.filterValue = '';
  }

  addTodo() {
    const todoItem: Todo = {
      task: this.taskName,
      completed: false
    }
    this.todos.push(todoItem);
  }

}
