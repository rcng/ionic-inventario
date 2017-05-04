import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { EditarPage } from '../editar/editar';
import { EliminarPage } from '../eliminar/eliminar';

import { InventarioService } from '../../services/inventario.service';
import { Inventario } from '../../services/inventario';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  id:string;
  inventario: Inventario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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

  onEditar() {
    this.navCtrl.push(EditarPage, {
      id: this.id
    });
  }

  onEliminar() {
    this.navCtrl.push(EliminarPage, {
      id: this.id
    });
  }

}
