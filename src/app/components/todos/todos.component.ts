import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  //initizlize variable
  todos: Todo[] = [];
  inputTodo: string = "";

  constructor() { }

  //initializer
  ngOnInit(): void {
    this.todos = [
      {
        content: 'Finish SWE Assignment',
        completed: false
      },
      {
        content: 'Learn Angular ',
        completed: false
      },
      {
        content: 'Build To do App',
        completed: false
      }

    ]

  }

  //work complete handler
  toggleCompleted(id: number){
this.todos.map((v, i) => {
  if(i == id) v.completed = !v.completed;

  return v;
})

  }


//delete handler
  deleteTodo(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }


  //add work handler
  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }



  }



