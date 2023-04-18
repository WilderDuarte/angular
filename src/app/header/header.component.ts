import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: Date | null = null;

  resultado: number = 0;

  constructor() {}

  ngOnInit(){
    this.currentDate = new Date();
    console.log(this.currentDate);
    // const myName = "WilderDuarte";
    // console.log(`Hola ${myName}`);
    // console.log(this.sumar());
    // console.log(this.sumarvar(5,5));
  }

  // sumar(){
  //   return console.log(1+2);
  // }

  sumarvar(a:number,b:number){
    this.resultado = a + b;
  }
}
