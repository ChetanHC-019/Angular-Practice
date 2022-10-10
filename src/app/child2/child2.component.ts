import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

@Output() newItemEvent= new EventEmitter();

addNewItem(value: string){
  this.newItemEvent.emit(value)
}


  @Input() aalert:any

  constructor() { }


  ngOnInit(): void {
    
  }

}
