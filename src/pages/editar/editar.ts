import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InventarioService } from '../../services/inventario.service';
import { Inventario } from '../../services/inventario';

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html'
})
export class EditarPage {

  id:number;
  inventario: Inventario;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private servicio: InventarioService) {
      this.id = this.navParams.get('id');
      this.cargarDetalle(this.id);
  }

  cargarDetalle(id){
    this.servicio.getInventario(id)
        .subscribe(
          rs => this.inventario = rs[0],
          er => console.log(er),
          () => console.log('ok')
        )
  }

  onGuardar() {
    this.servicio.putInventario(this.inventario)
        .subscribe(
          rs => console.log("actualizado"),
          er => console.log(er),
          () => this.navCtrl.popToRoot()
        )
  }

  onCancelar() {
    this.navCtrl.popToRoot();
  }

}
