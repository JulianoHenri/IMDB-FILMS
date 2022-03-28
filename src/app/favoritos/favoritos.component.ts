import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  listaFavoritos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.verificarListaFavoritos();
  }


  verificarListaFavoritos() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(String(key));
      this.listaFavoritos.push(JSON.parse(value || "{}"));
    }
  }

}
