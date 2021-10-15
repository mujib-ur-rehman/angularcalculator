import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcalculator';
  variable: number = 0;
  sum(a: number, b: number) {
    this.variable = a + b;
    alert(this.variable);
  }
  subtract(a: number, b: number) {
    this.variable = a - b;
    alert(this.variable);
  }
  multiply(a: number, b: number) {
    this.variable = a * b;
    alert(this.variable);
  }
  divide(a: number, b: number) {
    this.variable = a / b;
    alert(this.variable);
  }
}
