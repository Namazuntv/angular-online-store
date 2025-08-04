import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class producto {
    descripcion = 'Nuevo Producto';
    precio = 100.00;
}
