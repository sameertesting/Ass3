import { Injectable } from '@angular/core';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmployService {
  @Output()
  addeventfromchild:EventEmitter<any>;
  constructor() {
    this.addeventfromchild=new EventEmitter();
   }
   childb(){
    this.addeventfromchild.emit({
      id:12, f_name:"Same", L_name:"Raj", Dept:"Trainee", City: "Bangalore", Email:"Sam@gmail.com"
    },);
      }
}
export interface Employeeinterface{
  name:string;
    price:number;
    category:string;
    id:number;
    f_name:string;
    L_name:string;
    Dept:string;
    City:string;
    Email:string
}

