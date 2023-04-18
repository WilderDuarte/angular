import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  constructor(){ }

  messageType = 'info';
  claseejm = 5;
  inputValue = 'Hola Wilder';

  ngOnInit(): void {

  }

}
