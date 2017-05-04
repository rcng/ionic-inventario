import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NavController, AlertController } from 'ionic-angular';

import { InventarioService } from '../../services/inventario.service';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: InventarioService,
    public navCtrl: NavController,
    private alertCotrl: AlertController) {
      this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      id: ['',Validators.required],
      producto: ['', Validators.required],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }

  guardarInventario() {
    this.service.addInventario(this.form.value)
        .subscribe(
          rs => this.showAlert(),
          er => console.log(er),
          () => console.log('ok')
        )
  }

  showAlert() {
    let alert = this.alertCotrl.create({
      title: 'Agregar inventario',
      subTitle: 'Los datos fueron guardados!',
      buttons: ['Ok']
    });
    alert.present();
    this.form.reset();
  }

}
