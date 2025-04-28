import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  private carritoSubjet = new BehaviorSubject<{producto:producto;cantidad:number}[]>([])
}
