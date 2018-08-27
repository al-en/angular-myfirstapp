import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
