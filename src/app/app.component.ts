import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { AppService } from './app.service';
import { CheckboxChangeEvent } from 'primeng/checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('todoTask') todoTask: any;
  task = '';
  todos: Todo[] = [];
  constructor(private appservice: AppService) {

  }


  ngOnInit(): void {
    this.getList();

  }

  getList() {
    this.appservice.getTodoList().subscribe(
      (Response) => {
        this.todos = Response;
      }

    )

  }



  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.appservice.updateTodo({ ...todo, completed: e.checked }).subscribe(
      Response => console.log(Response)

    )
  }
  deleteTodo(e: unknown, id: Todo['id']) {
    this.appservice.deleteTodo(id).subscribe(
      Response => this.getList()
    )

  }
  addTodo() {
    this.appservice.addTodo({ task: this.task, completed: false }).subscribe(
      Response => {
        this.todoTask.reset();
        this.getList();


      }
    )

  }




}
