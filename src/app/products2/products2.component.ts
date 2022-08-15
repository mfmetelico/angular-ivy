import { Component } from '@angular/core';

declare function genRandomNumbers(): any;

@Component({
  selector: 'app-product2',
  template: `<h2>Product List</h2>
    <Div *ngIf='showDiv'>Product 1</Div>
    <Div>{{rNum}}</Div>
    <br/>
        `,
  styles: ['div {font-weight:bolder; color:green;}',
    'li {color: blue; margin-top:10px;}',
    'li.li1 {color: purple; margin-top:10px; font-size:1.5em; }',
  ]

})

export class Products2Component {
    showDiv = true;
    rNum = <[]>genRandomNumbers();

    page: Number = 1;
    itemsToDisplay: Number = 10;

    pageChanged(event) {
        this.page = event;
  }

}

