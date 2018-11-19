import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera APP';
  users = ['ana','jhon','rosa','juan'];
  activate:boolean = true;
  users2 = ['aaa','bbb','ccc','ddd'];

  //Modelos
  name: string = "Juan Perez";
  age: number = 25;

  // Datos
  posts = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      //console.log(data);
      this.posts = data;
    });
  }

  deleteUser(user){
    for(let i=0; i<this.users2.length;i++){
      if(user==this.users2[i]){
        this.users2.splice(i,1);
      }
    }
  }

  addUser(newUser){
    console.log(newUser.value);
    this.users2.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }

  /*u1 = new UsersComponent("Ana Carolina",21,{street:"Calle 1",city:"Lima"},["Bailar","Leer"]);
  u2 = new UsersComponent("Rosa Gomez",24,{street:"Calle 223",city:"Arequipa"},["Bailar","Leer"]);
  u3 = new UsersComponent("Alberto Gonzales",18,{street:"Calle 22321",city:"Lima"},["Bailar","Leer"]);
  u1 = new UsersComponent("Ana Carolina",21,["Bailar","Leer"]);
  u2 = new UsersComponent("Rosa Gomez",24,["Bailar","Leer"]);
  u3 = new UsersComponent("Alberto Gonzales",18,["Bailar","Leer"]);
  users2 = [this.u1,this.u2,this.u3];*/
}
