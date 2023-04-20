import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Gracias a esto todos los componentes sin importar sus modulos pueden hacer uso de este servicio, de igual manera se pueden asignar servicios a modulos en especificio, tocaría quitar el root
})
export class TodoService {

  constructor(private httpnombre: HttpClient) { }

  getTodos(){
    return this.httpnombre.get('https://jsonplaceholder.typicode.com/todos');
  }

  // getComments(postId:number){
  //   return this.httpnombre.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  // }

  getComments(postId:number){
    const params = {
      postId
    };
    return this.httpnombre.get(`https://jsonplaceholder.typicode.com/comments`, {
      params
    });
  }

  // getPosts(){
  //   return this.httpnombre.post('https://jsonplaceholder.typicode.com/posts',null);
  // }

  getPosts(){
    const body = {
      id: 1,
      comment: 'Hola',
      date: '20-04-2023'
    }
    return this.httpnombre.post('https://jsonplaceholder.typicode.com/posts',body);
  }

}
