import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { InventarioPage } from '../pages/inventario/inventario';
import { DetallePage } from '../pages/detalle/detalle';
import { EditarPage } from '../pages/editar/editar';
import { EliminarPage } from '../pages/eliminar/eliminar';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { InventarioService } from '../services/inventario.service';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InventarioPage,
    DetallePage,
    EditarPage, EliminarPage,
    TabsPage, LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InventarioPage,
    DetallePage,
    EditarPage, EliminarPage,
    TabsPage, LoginPage
  ],
  providers: [InventarioService, AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
