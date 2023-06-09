import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any[] = []; // No está bien meter any dentro de variables

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {

    // puedo hacerlo para el mismo compoentne, pareceria que no tiene sentido pero funciona
    // this.todoService.posts$.subscribe((res) => {
    //   console.log('Nueva data: ', res);
    // });

      this.todoService.getTodos().subscribe( (res:any) => {
        // console.log(res);
        this.todos = res;
        console.log(this.todos);
      });

      this.todoService.getComments(10).subscribe((res) => console.log('Comments: ', res));

      this.todoService.getPosts().subscribe((res) => console.log('Posts: ', res));
  }
// creación de un observable
  updatePost() {
    this.todoService.postSource.next([1,2,3,4,5]);
  }

}
