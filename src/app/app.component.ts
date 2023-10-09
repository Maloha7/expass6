import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  formData: any = {
    summary: '',
    description: '',
  };

  title = 'todo-app';
  todos: any;

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => (this.todos = data));
  }

  onSubmit(todoForm: any) {
    const jsonData = {
      summary: this.formData.summary,
      description: this.formData.description,
    };

    this.todoService.createTodo(jsonData).subscribe((resposne) => {
      this.resetForm();
      console.log('Created todo');
    });
  }

  refresh() {
    this.todoService.getTodos().subscribe((data) => (this.todos = data));
  }

  resetForm() {
    this.formData = {
      summary: '',
      description: '',
    };
  }

  deleteTodo(id: any) {
    this.todoService.deleteTodo(id).subscribe();
  }
}
