import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  items=['item1','item2','item3','item4'];


  addItem(newItem:string){
    this.items.push(newItem)
  }


  title = 'test-demo';
  public Details:any=[]


  userCurrentStatus=false;
  statusChange(){
     if(this.userCurrentStatus==false)
      {
        this.userCurrentStatus=true
      }
      else this.userCurrentStatus=false
  }

  onClickSubmit(EmpDetails:any){
   console.log(EmpDetails)
    this.Details.push(EmpDetails)
  }
  resetLoginForm(EmpDetails: NgForm) {
    EmpDetails.resetForm()
  }

  // alertMsg(){
  //   console.log("Hello all !!")
  // }



}
