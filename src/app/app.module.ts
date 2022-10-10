import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { Child2Component } from './child2/child2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StrucDirectiveComponent } from './struc-directive/struc-directive.component';
import { AttriDirectiveComponent } from './attri-directive/attri-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmpListComponent,
    Child2Component,
    DataBindingComponent,
    StrucDirectiveComponent,
    AttriDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
