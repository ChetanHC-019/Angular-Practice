import { RESTORED_VIEW_CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  loginConfirm:boolean=false;

  loginUser(){
      this.loginConfirm=true;
  }
  logOutUser(){
    this.loginConfirm=false;
  }

  constructor() {
    console.log("constructor called")
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  @Input() userStatus:boolean=false;
    status:boolean=false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log(changes)
  }
    
        
}
