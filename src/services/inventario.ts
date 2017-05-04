export class Inventario {
   constructor(
      public id:number,
      public producto: string,
      public existencia: number,
      public precio: number,
      public proveedor: string,
      public foto: string
   ) { }
}