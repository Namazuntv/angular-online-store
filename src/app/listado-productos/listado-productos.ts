import { Component } from '@angular/core';
import { producto } from "../producto/producto";

@Component({
  selector: 'app-listado-productos',
  imports: [producto],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

}
