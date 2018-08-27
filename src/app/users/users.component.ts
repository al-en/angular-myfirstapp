import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() nameUser;

  name:string;
  age:number;
  address:{
    street:string;
    city:string;
  };
  hobbies:string[];

  //
  /*constructor(name:string,age:number,address:{street:string,city:string},hobbies:string[]){
    this.name = name; // "Pollito Lito"
    this.age = age; //26;
    this.address = {
      street: address.street, //"Av. Los tulipanes",
      city: address.city
    };
    this.hobbies = hobbies; // ["Guitarra","Nadar","Leer","Cantar"]
}*/

constructor(){
  this.name = "Pollito Lito"
  this.age = 26;
  this.address = {
    street: "Av. Los tulipanes",
    city:"Lima"
  };
  this.hobbies = ["Guitarra","Nadar","Leer","Cantar"]
}
  sayHello(name:string){
    alert("Hello " + name);
  }

  ngOnInit() {
  }

}
