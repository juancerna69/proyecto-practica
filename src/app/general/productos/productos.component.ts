import { Component } from '@angular/core';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [CommonModule,FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
 
  productos:Producto []= [
    {
    id:1,
    nombre:'producto 1',
    descripcion:'rueda toyo',
    precio:7000000,
    imagen:'assets/ruedas.jpg',
    disponible:true,
  
    },
    {
      id:2,
      nombre:'producto 2',
      descripcion:'filtro de aceite',
      precio:170000,
      imagen:'assets/filtro.jpg',
      disponible:true,
 
    },
    {
      id:3,
    nombre:'producto 3',
    descripcion:'bodykits deportivo',
    precio:2000000,
    imagen:'assets/bodikyts.avif',
    disponible:true,
    
    },
    {
      id:4,
    nombre:'producto 4',
    descripcion:'computadoras de autos',
    precio:3000000,
    imagen:'assets/ecus-de-coche.webp',
    disponible:true,
    },
    {
      id:5,
      nombre:'producto 5',
      descripcion:'Rinnes Spinners',
      precio:3000000,
      imagen:'assets/rinn-spinner.png',
      disponible:true,
    },
    {
      id:6,
    nombre:'producto 6',
    descripcion:'suspencion deportiva',
    precio:3000000,
    imagen:'assets/ap_suspension.jpg',
    disponible:true,
    },
    {
      id:7,
    nombre:'producto 7',
    descripcion:'radiador deportivo',
    precio:3000000,
    imagen:'assets/radiador.webp',
    disponible:true,
    },
    {
      id:8,
    nombre:'producto 8',
    descripcion:'bloque de motor',
    precio:3000000,
    imagen:'assets/bloque.avif',
    disponible:true,
    },
    {
      id:9,
    nombre:'producto 9',
    descripcion:'tapa de cilindros',
    precio:3000000,
    imagen:'assets/tapa de cilindros.webp',
    disponible:true,
    }
  ]

  constructor(private carritoService : CarritoService){}

  agregar(producto:Producto){
    this.carritoService.agregaralcarrito(producto)
    alert('producto agregado al carrito')
  } 

}
