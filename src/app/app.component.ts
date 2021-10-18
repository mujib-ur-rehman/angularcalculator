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
  a: number = 0;
  b: number = 0;
  value: string = '';
  getfirstValue(value1: string) {
    this.a = parseInt(value1);
    alert(this.a);
  }
  getsecondValue(value2: string) {
    this.b = parseInt(value2);
    alert(this.b);
  }
  sum() {
    this.num1 = this.a;
    this.num2 = this.b;

    this.variable = this.num1 + this.num2;
    alert(this.variable);
  }
  subtract() {
    this.num1 = this.a;
    this.num2 = this.b;

    this.variable = this.num1 - this.num2;
    alert(this.variable);
  }
  multiply() {
    this.num1 = this.a;
    this.num2 = this.b;

    this.variable = this.num1 * this.num2;
    alert(this.variable);
  }
  divide() {
    this.num1 = this.a;
    this.num2 = this.b;

    this.variable = this.num1 / this.num2;
    alert(this.variable);
  }
}
