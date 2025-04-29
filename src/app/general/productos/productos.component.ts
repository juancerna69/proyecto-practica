import { Component } from '@angular/core';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
 
  productos:Producto []= [
    {
    id:1,
    nombre:'producto 1',
    descripcion:'turbo de auto deportivo',
    precio:7000000,
    imagen:'\assets\Garrett_Performance_GTX5533R_GenII__Turbocharger.jpg',
    disponible:true,
  
    },
    {
      id:2,
      nombre:'producto 2',
      descripcion:'filtro de aceite',
      precio:170000,
      imagen:'\assets\What-is-the-Oil-Filters-Primary-Job_-1000x675-1.jpg',
      disponible:true,
 
    },
    {
      id:3,
    nombre:'producto 3',
    descripcion:'bodykits deportivo',
    precio:2000000,
    imagen:'\assets\S07968a2cbfcf4fb69650b5fa0fc59d345.avif',
    disponible:true,
    
    },
    {
      id:4,
    nombre:'producto 4',
    descripcion:'computadoras de autos',
    precio:3000000,
    imagen:'\assets\ecus-de-coche.webp',
    disponible:true,
    }
  ]

  constructor(private carritoService : CarritoService){}

  agregar(producto:Producto){
    this.carritoService.agregaralcarrito(producto)
    alert('producto agregado al carrito')
  } 

}
