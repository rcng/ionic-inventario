import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

import { InventarioService } from '../../services/inventario.service';
import { Inventario } from '../../services/inventario';

@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html'
})
export class InventarioPage {

  lista: Inventario[];

  constructor(
    public navCtrl: NavController,
    private servicio: InventarioService) {
      this.leerInventario();
  }

  leerInventario() {
    this.servicio.getInventarios()
        .subscribe(
          rs => this.lista = rs,
          er => console.log(er),
          () => console.log(this.lista)
        )
  }

  ionViewWillEnter(){
    this.leerInventario();
  }
  onClick(item) {
    this.navCtrl.push(DetallePage, {
      id: item.id
    });
  }

}
