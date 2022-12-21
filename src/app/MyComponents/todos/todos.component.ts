import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  constructor(){
    this.todos=[
      {
        sno: 3,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 1,
        title: "This is title 1",
        desc: "Description 1",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "Description 2",
        active: true
      }
    ]
  }

}
