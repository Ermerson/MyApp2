import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Livro } from '../../model/livro'
import { DestinoPage } from '../destino/destino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public livros: Livro[];
  

  constructor(public navCtrl: NavController) {

    let path:string = '../../assets/capas/';

    let l1 = {nome:'1984', autor:'George Orwell', capa: path + 'capa1.jpg'};
    let l2 = {nome:'Harry Potter e a Pedra Filosofal', autor:'J. K. Rowling', capa: path + 'capa2.jpg'};
    let l3 = {nome:'O Senhor dos Anéis', autor:'J. R. R. Tolkien',capa: path + 'capa3.jpg'};
    let l4 = {nome:'Fundação', autor:'Isaac Asimov', capa: path + 'capa4.jpg'};
    let l5 = {nome:'Neuromancer', autor:'William Gibson', capa:path + 'capa5.jpg'};
    let l6 = {nome:'O Homem do Castelo do Alto', autor:'Philip K. Dick', capa: path + 'capa6.jpg'};
    let l7 = {nome:'Snow Crash', autor:'Neal Stephenson', capa: path + 'capa7.jpg'};
    let l8 = {nome:'2001: Uma Odisséia no Espaço', autor:'Arthur Clarke', capa: path + 'capa8.jpg'};
    let l9 = {nome:'Coraline', autor:'Neal Gaiman', capa: path + 'capa9.jpg'};

    this.livros = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
    
  }

  irParaDestino(livro: Livro): void{
    this.navCtrl.push(DestinoPage,{livroSelecionado: livro});    
  }

}
