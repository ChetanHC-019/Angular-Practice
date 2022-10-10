import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor() { }
  @Input() employees:any

  ngOnInit(): void {
  }
  
  deleteEmployee(employee:string){
    console.log(employee)
  }
}
