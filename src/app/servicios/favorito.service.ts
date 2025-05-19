import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/productos.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
private favoritoSubjet = new BehaviorSubject<{producto:Producto; cantidad : number}[]>([]);
favoritos$=this.favoritoSubjet.asObservable()

agregarFavorito(producto:Producto){
  const productos=this.favoritoSubjet.getValue();
  const encontrado=productos.find(p => p.producto.id===producto.id);
  if(encontrado){
    encontrado.cantidad++
  }else{
    this.favoritoSubjet.next([...productos,{producto,cantidad:1}])

  }

}
eliminarFavorito(productoID:number){
  const productos=this.favoritoSubjet.getValue().filter(p=>p.producto.id !== productoID)
  this.favoritoSubjet.next(productos);
}

}
