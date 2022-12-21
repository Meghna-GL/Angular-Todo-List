import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {

  }

  onClick(todo: Todo){
    //event emitter to emit the event
    this.todoDelete.emit(todo);
    console.log("Onclick has been triggered");
  }
}
