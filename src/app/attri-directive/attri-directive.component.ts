import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri-directive',
  templateUrl: './attri-directive.component.html',
  styleUrls: ['./attri-directive.component.css']
})
export class AttriDirectiveComponent implements OnInit {

  isSpecial:boolean=true;

  currentStyles:any={
    'font-style':  'italic',
    'font-weight':  'bold',
    'font-size':  '24px'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
