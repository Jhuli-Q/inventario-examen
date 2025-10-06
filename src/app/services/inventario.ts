import { Injectable } from '@angular/core';
import { Inventario } from '../modelo/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private listInventario: Inventario[] = [];

  obtenerInventario(): Inventario[] {
    return this.listInventario;
  }

  agregarItem(nombreProducto: string, cantidad: number, precio: number) {
    if (!nombreProducto || cantidad <= 0 || precio <= 0) return;
      const nuevo = new Inventario(nombreProducto, cantidad, precio);
      this.listInventario.push(nuevo);
    
  }
}
