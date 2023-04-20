import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  name = new FormControl('',[Validators.minLength(4),Validators.required]);
  isChecked = new FormControl(true);

  form = new FormGroup({
    nametwo: new FormControl('',[Validators.minLength(4),Validators.required]),
    checkedtwo: new FormControl(true)
  });

  constructor() {}

  ngOnInit(): void {

  }

}
