import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /*
  template: `<p>Home works!</p>
      <h3>Hello</h3>`,
  */
  styleUrls: ['./home.component.css']
  /*
  styles: [
    'div#demo {color:red;}',
    'div#demo {border-style: solid;}',
    'div#demo {border-color:grey;}', 
    'div#demo {width:200px;}', 
    'div#demo {height:40px;}'
  ]
  */
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
