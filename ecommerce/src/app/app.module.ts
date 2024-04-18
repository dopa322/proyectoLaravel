import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
   AppComponent //ojo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    HttpClientModule,

    /* agregamos un nuevo modulo */
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //ojo
})
export class AppModule { }
