import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  x1 = new FormControl('0');
  x2 = new FormControl('0');
  y1 = new FormControl('0');
  y2 = new FormControl('0');

  public distancia = 0;
  public pendient = 0;
 

  constructor(
    private fb: FormBuilder
  ) {

  }

  distance() {
    let num = Math.pow((this.x2.value-this.x1.value), 2) + Math.pow((this.y2.value-this.y1.value), 2)
    this.distancia = Math.sqrt(num)

  }
  pendiente() {
    this.pendient = this.y2.value-this.y1.value/this.x2.value-this.x1.value
  }

}
