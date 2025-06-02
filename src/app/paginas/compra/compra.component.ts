import { CommonModule } from '@angular/common';
import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarritoService } from '../../servicios/carrito.service';


@Component({
  selector: 'app-compra',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent  implements OnInit {
//declaracion del formulario reactivo para la compra
formularioCompra!:FormGroup;
//variable para almacenar el total de la compra(subtotal+envio)
total!:number;

//costo fijo de envio
envio=1500;

//indicador para saber si la factura ya fue generada
facturaGenerada=false

//objeto que contiene la informacion de la factura generada
factura:any;

//control la visibilidad del modal que muestra el PDF
mostrarModal = false;

//fuente segura para mostrar el PDF generado en el iframe(URL sanitizada)
pdfSrc:SafeResourceUrl | undefined;

constructor (
  private fb :FormBuilder, //formbuilder para crear el formulario reactivo
  private carritoService: CarritoService,//servicio para manejar el carrito y obtener products y total
  private sanitizer: DomSanitizer,//para sanitizar la UR1 del PDF y que angular lo permita mostrar
){}
//metodo que se ejecuta al inicializar el componente
ngOnInit(): void {
  //formulario con los campos requeridos y validadores
  this.formularioCompra=this.fb.group({
    nombre:['',Validators.required],
    direccion :['',Validators.required],
    correo:['',Validators.required],
    telefono:['',Validators.required],
    codigoPostal:['',Validators.required],
    ciudad:['',Validators.required],
    provincia:['',Validators.required],
    metodoPago:['',Validators.required],
   

  })
}

//calcular el total de la compra sumando el subtotal y el costo de envio
calcularTotal():number{
  const subtotal = this.carritoService.obtenerTotal();//obtiene subtotal del carrito
  this.total =subtotal+this.envio;
  return this.total
}

emitirFactura():void{
  const datosCliente = this.formularioCompra.value;//datos ingresados en el formulario
  const productos =this.carritoService.obtenerProductos();//productos del carrito
  const totalFinal= this.calculadorTotal();//total calculado en envio
}

//construye el objeto factura con toda la info necesaria
this.factura ={
  cliente :datosCliente,
  productos: productos,
  envio: this.envio,
  total :totalFinal,
  fecha: new Date ()

}
//marca que la factura fue generada
this.facturaGenerada =true
}
//metodo que se ejecuta al finalizar la compra (click en boton)
//verifica validez del formulario,genera factura y muestra PDF
finalizarCompra():void{
  if(this.formularioCompra.valid){
    this.emitirFactura();//crea la factura
    this.generarPDFmodal();//genera y muestra el PDF en modal
  }else{
    this.formularioCompra.markALLAstouched()//marca todos los campos como tocados para mostrar errores
  }
}

//genera el PDF con jsPDF y crea la URL para mostrar en inframe dentro del modal
generarPDFmodal():void{
  if (!this.factura)return;

  const doc =new jsPDF();

  doc.sentFontSize(18)
  doc.text('factura de compra',14,20);

  document.sentFontSize(12);
    doc.text(`fecha:${this.factura.fecha.tolocaleString()}`,14,30);


    //informcion del cliente
    doc.text('cliente',14,40)
    const c =this.factura.cliente;
    doc.text(`nombre: ${c.nombre}`,20,50);
     doc.text(`direccion: ${c.direccion}`,20,50);
      doc.text(`correo: ${c.correo}`,20,50);
       doc.text(`telefono: ${c.telefono}`,20,50);
        doc.text(`ciudad: ${c.ciudad}`,20,50);
         doc.text(`provincia: ${c.provincia}`,20,50);
          doc.text(`codigo postal: ${c.codigoPostal}`,20,50);

//listado de productos con calidad,precio y subtotal
let y =120
doc.text('productos',14,y);

this.factura.productos.forEach((item:any, index:number)=>{
  y +=10;
  doc.text(
    `${index + 1}.${item.producto.nombre} - cantidad: ${item.cantidad} -precio ${item.producto.precio.tofixed(2)} -subtotal $${(item.producto.precio * item.cantidad).toFixed(2)} `,
    20,
    y
  );
  
});
//costos finales
y += 10;
doc.text(`costo envio :$${this.factura.envio.tofixed(2)}`,14,y)
y += 10;
doc.text(`total a pagar :$${this.factura.envio.tofixed(2)}`,14,y)

const pdfBlob= doc.output('blop')
this.pdfSrc = this.sanitizer.bypassSecuritytrusResourceUrl(URL.createObjectURL(pdfblop))
//abre el modal que tiene el pdf
this.mostrarModal=true;
//
cerarModal():void{
  this.this.mostrarModal =false
  if(this.pdfSrc){
    URL.revokeObjectURL(this.this.pdfSrc as any).changingthisbreaksapplicationsecurity
    this.this.pdfSrc =undefined;
  }
}
imprimirPDF():void{
  const inframe :HTMLIFrameElement | NULL =this.document.getElementById('pdfFrame') as HTMLAllCollectionML

  if(iframe && inframe.contentWimdow){
    inframe.contentWimdow.focus()
  }
}

}
}
