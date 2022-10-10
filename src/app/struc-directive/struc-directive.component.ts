import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc-directive',
  templateUrl: './struc-directive.component.html',
  styleUrls: ['./struc-directive.component.css']
})
export class StrucDirectiveComponent implements OnInit {

  inpValue:any;

  loginStatus:boolean=true;

  employees: any[] = [  
    {  
        code: 'emp1', name: 'Karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '25/6/1988'  
    },  
    {  
        code: 'emp2', name: 'sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp3', name: 'rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  
        code: 'emp4', name: 'Mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'  
    },  
]; 

  constructor() { }

  ngOnInit(): void {
  }

  select(data:number){
    this.inpValue=data
  }

}
