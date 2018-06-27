import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';

/**
 * Generated class for the DestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.livro = this.navParams.get("livroSelecionado");
  }

  public livro:Livro;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}
