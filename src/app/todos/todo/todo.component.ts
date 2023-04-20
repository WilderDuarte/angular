import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService){

  }

  ngOnInit(): void {
    this.todoService.posts$
    .pipe( // el pipe lo puedo poner en cualquie rcompoentne o en el todo.service general para que el pipe aplioque a cualquier componetne y evitar ponerlo en cada componenten de manera individual
      // operadores hay muchos
      map( (res: number[]) => {
        console.log(res);
        // res = ['uno','dos','tres']; puedo retornar algo diferente también
        return res.filter((num) => num>3);
        // sino se va agregar una logica extra, solo se puede poner el poeprador diracemten, es una funci´n flecha de javascript
      }),
      // map((res: number[]) => res.filter((num) => num > 3)) {
      tap((res) => {
        console.log("desde el tap: ",res);
        return null;
      })
    )
    .subscribe((res) => {
      console.log('Nueva data: ', res);
    });
  }

}
