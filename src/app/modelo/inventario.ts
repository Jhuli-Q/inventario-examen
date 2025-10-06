export class Inventario {
    nombreProducto!: string;
    cantidad!: number;
    precio!: number; 

    constructor(nombreProducto: string, cantidad: number, precio: number) {
        this.nombreProducto = nombreProducto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
