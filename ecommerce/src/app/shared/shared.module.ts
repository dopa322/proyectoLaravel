import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    //importamos modulos propios de angular 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    RouterModule // esto nos habilitara la etiqueta 'routerLink'

  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
