import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  //string interpolation
  sentence="This is the example for String interpolation "


  //property binding
  itemImgUrl="../assets/Hibiscus.jpg"
  isUnchanged=false

  //event binding
  number=0

  //Two way binding
  fullName:string=""

  constructor() { }

  increseNum(){
    this.number=this.number+1
  }

  ngOnInit(): void {
  }

}
