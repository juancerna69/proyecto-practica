import { Routes } from '@angular/router';
import { InicioComponent} from './general/inicio/inicio.component';
import { OfertasComponent } from './general/ofertas/ofertas.component';
import { ProductosComponent } from './general/productos/productos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './general/home/home.component';
import { CarritoComponent } from './general/carrito/carrito.component';
import { QuienesomosComponent } from './general/quienesomos/quienesomos.component';

export const routes: Routes = [
    
    {path:'',redirectTo:'/inicio',pathMatch:'full'},
    {path:'inicio',component:InicioComponent},
    {path :'home',component:HomeComponent},
    {path:'ofertas',component:OfertasComponent},
    {path:'producto',component:ProductosComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'footer',component:FooterComponent},
    {path:'quienesomos',component:QuienesomosComponent},

];
