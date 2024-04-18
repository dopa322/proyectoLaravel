import { Component, OnInit } from '@angular/core';

/* primer truco, es como simular una recarga de pagina */
declare var $:any;
declare function initPageEcommerce([]):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  /* lo que ara es que al recargar la pagina esperara 50 milisegundos  */
    setTimeout(() => {
      initPageEcommerce($);
    }, 50);
  }
}
