import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../servicios/favorito.service';
import { CarritoService } from '../../servicios/carrito.service';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent   {
  productosEnFavoritos:{producto:ProductosComponent;cantidad:number}[]=[]

  constructor(private favoritoService:FavoritoService,
    private carritoService:CarritoService
  ){}
  /*
  }
  agregarFavoritos(index:number){
    this.productosEnFavoritos[index].cantidad++
  }
  eliminarFavorito(productoID:number){
 this.favoritoService.eliminarFavorito(productoID)
  }
*/}