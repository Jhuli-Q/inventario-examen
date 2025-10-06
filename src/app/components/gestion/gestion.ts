import { Component, inject } from '@angular/core';
import { InventarioService } from '../../services/inventario';
import { Inventario } from '../../modelo/inventario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion {
  public InventarioService = inject(InventarioService);
  inventario: any[] = [];
  nombreProducto: string = '';
  cantidad: number | null = null;
  precio: number | null = null;

  constructor(private inventarioService: InventarioService) {
    this.inventario = this.inventarioService.obtenerInventario();
  }

  agregarProducto() {
    if (this.nombreProducto && this.cantidad && this.precio) {
      this.inventario.push({
        nombreProducto: this.nombreProducto,
        cantidad: this.cantidad,
        precio: this.precio
      });
      this.nombreProducto = '';
      this.cantidad = null;
      this.precio = null;
    }
  }


}
