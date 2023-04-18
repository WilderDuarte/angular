import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent implements OnInit {

  isError = false;
  sections = [
    "Introducción",
    "Usos de Angular",
    "Instalación del Entorno",
    "CLI",
    "Componentes"
  ];

  diasSemana = [
    {id: 1, name: 'Lunes'},
    {id: 2, name: 'Martes'},
    {id: 3, name: 'Miércoles'},
    {id: 4, name: 'Jueves'},
    {id: 5, name: 'Viernes'},
    {id: 6, name: 'Sábado'},
    {id: 7, name: 'Domingo'},
  ];

  constructor(){}

  ngOnInit(): void {
    console.log(this.isError);
    setTimeout(() => {
      this.isError = true;
      this.diasSemana.push({id:8, name: 'Días de la semana'});
    }, 4000);
  }

  showError(){
    this.isError = !this.isError;
  }
}
