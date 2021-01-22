import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { IEnvio, IHogar, IMotor, IProducto, ITecno } from "../Interfaces";
import {AngularFireDatabase} from '@angular/fire/database';



@Injectable()

export class ProductoService{

  
    Productos: (IProducto| IMotor| IHogar| ITecno )[]=[];



/*

GetProductoId(Id:number) : (IProducto| IMotor| IHogar| ITecno ){
  return this.Productos.find(x => x.Id == Id);
}*/

constructor(private _db: AngularFireDatabase){


}
GetProducto() : firebase.database.Reference{
  let ref =this._db.database.ref("Productos")
  return ref;
}
GetProductoV() : firebase.database.Reference{
  let ref =this._db.database.ref("Mis_ventas")
  return ref;
}
setProducto(producto: IMotor|IHogar|ITecno){
let ref=this._db.database.ref("Productos");
ref.push(producto);

}
setEnvio(producto: IEnvio){
  let ref=this._db.database.ref("Envios");
  ref.push(producto);
  
  }
}

