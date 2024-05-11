import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://localhost:3000/todos';

  constructor(private http:HttpClient) { }

  getTodoList() {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  addTodo(postData: Todo) {
    return this.http.post(this.baseUrl, postData);
  }

  updateTodo(postData: Todo) {
    return this.http.patch(`${this.baseUrl}/${postData.id}`, postData);
  }

  deleteTodo(id: Todo['id']) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
