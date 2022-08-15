import { Component } from '@angular/core';
import { genRandomNumbers } from '../../assets/JS/randomgen.js';

//declare function genRandomNumbers(): any;

@Component({
  selector: 'app-product',
  template: `<h2>Product List</h2>
    <Div *ngIf='showDiv'>Product 1</Div>
    <Div>{{rNum}}</Div>
    <br/>
    <Div>
      <li *ngFor="let dep of departments">{{dep}}</li>
    </Div>
    <br/>
    <Div>
      <li class="li1" *ngFor="let emp of employees">{{emp.name}} - ID: {{emp.employeeID}}</li>
    </Div>


    `,
  styles: [
    'div {font-weight:bolder; color:green;}',
    'li {color: blue; margin-top:10px;}',
    'li.li1 {color: purple; margin-top:10px; font-size:1.5em; }',
  ],
})
export class ProductComponent {
  showDiv = true;
  rNum = <[]>genRandomNumbers();

  departments = ['Dept 1', 'Dept 2', 'Dept 3', 'Dept 4'];

  employees = [
    {
      name: 'Name 1',
      employeeID: 1,
      department: 'Dept 1',
    },
    {
      name: 'Name 2',
      employeeID: 2,
      department: 'Dept 2',
    },
    {
      name: 'Name 3',
      employeeID: 3,
      department: 'Dept 3',
    },
  ];
}
