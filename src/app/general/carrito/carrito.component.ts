import { Component,OnInit } from '@angular/core';
import { Producto } from '../../model/productos.model';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito :{producto:Producto;cantidad:number}[]=[]

  constructor(private carritoService:CarritoService){}
  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((producto) =>{
    this.productosEnCarrito=producto;
    });
  }
  agregarCantidad(index:number){
    this.productosEnCarrito[index].cantidad++;
  }
  quitarCantidad(index:number){
    if(this.productosEnCarrito[index].cantidad>1){
      this.productosEnCarrito[index].cantidad--;
    }
  }
  eliminarProducto(productoId:number){
    this.carritoService.eliminarDelcarrito(productoId)
  }
  vaciarCarrito(){
    this.carritoService.vaciarCarrito()
  }
  realizarCompra(){
    alert('compra realizada')
    this.vaciarCarrito()
}



}
