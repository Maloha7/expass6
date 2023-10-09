import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    const url = `${this.apiUrl}/todos`;
    return this.http.get(url);
  }

  createTodo(jsonData: any) {
    const url = `${this.apiUrl}/todos`;
    return this.http.post(url, jsonData);
  }

  deleteTodo(id: any) {
    const url = `${this.apiUrl}/todos/${id}`;
    return this.http.delete(url);
  }
}
