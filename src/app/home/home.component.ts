import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = 5;
  search = '';
  filme: any;
  listaFavoritos: any[] = [];
  filmeFavoritado: any;
  isFavoritado: boolean = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.verificarListaFavoritos();
  }


  buscarImdb(param: any) {
    this.homeService.getImdb(param).subscribe(returnImdb => {
      this.filme = returnImdb;
      this.verificarFilmeEstaFavoritado();
    })
  }

  resetarPesquisa() {
    this.search = '';
    this.filme = null;
  }

  adicionarFavoritos() {
    if (this.filme) {
      localStorage.setItem(this.filme.Title, JSON.stringify(this.filme))
    }
    this.buscarImdb(this.search)
    this.verificarListaFavoritos();
  }

  removerFavoritos() {
    if (this.filme) {
      localStorage.removeItem(this.filme.Title)
    }
    this.buscarImdb(this.search)
  }

  verificarListaFavoritos() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(String(key));
      this.listaFavoritos.push(JSON.parse(value || "{}"));
    }
    console.log(this.listaFavoritos);
    
  }

  verificarFilmeEstaFavoritado() {
    if (this.filme) {
      this.isFavoritado = false;
      this.filmeFavoritado = this.listaFavoritos.filter(el => el.Title.toLowerCase() == this.filme.Title.toLowerCase());
      console.log(this.filmeFavoritado);
      
      if (this.filmeFavoritado.length === 0) {
        this.isFavoritado = false;
      }else{
        this.isFavoritado = true;
      }
    }
  }

}
