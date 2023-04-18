import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = "WilderDuarte";
  nameTwo = "WilderDuarte".toUpperCase();
  date = new Date();
  estado = true; // 0 o 1

  constructor(){}
  ngOnInit(): void {
    console.log(this.date);
  }

  changeState(){
    this.estado = !this.estado;
  }

  getTextState(){
    console.log("Ejecutándose");
    const text = this.estado == false ? 'PENDIENTE' : 'REGISTRADO';
    return text;
  }

  print(){
    console.log("OTRA FUNCIÓN");
  }

}
