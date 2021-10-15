import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcalculator';
  variable: number = 0;
  num1: number = 0;
  num2: number = 0;
  a: string = 'null';
  b: string = 'null';
  getValue() {
    prompt('enter first value', this.a);
    prompt('enter first value', this.b);
  }
  sum() {
    this.getValue();
    this.num1 = parseInt(this.a);
    this.num2 = parseInt(this.b);

    this.variable = this.num1 + this.num2;
    alert(this.variable);
  }
  subtract() {
    this.getValue();

    this.num1 = parseInt(this.a);
    alert(typeof this.num1);
    this.num2 = parseInt(this.b);
    alert(typeof this.num2);
    this.variable = this.num1 - this.num2;
    alert(this.num1 - this.num2);
    alert(this.variable);
    alert(typeof this.variable);
  }
  multiply() {
    this.getValue();

    this.num1 = parseInt(this.a);
    this.num2 = parseInt(this.b);

    this.variable = this.num1 * this.num2;
    alert(this.variable);
  }
  divide() {
    this.getValue();

    this.num1 = parseInt(this.a);
    this.num2 = parseInt(this.b);

    this.variable = this.num1 / this.num2;
    alert(this.variable);
  }
}
