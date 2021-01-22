import { Component, OnInit } from '@angular/core';

import { RouterStateSnapshot } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IHogar, IMotor, IProducto, ITecno, IVenta,IEnvio } from '../Interfaces';
import { ProductoService } from '../services/productos.service';
@Component({
  selector: 'app-misventas',
  templateUrl: './misventas.page.html',
  styleUrls: ['./misventas.page.scss'],
})
export class MisventasPage {

  Id:number=222;
  Puntuacion: number=3;
  Nombre: string="casa";
  Precio: number=21;


Ventas: (IVenta)[]=[]



  constructor(private _toastCtrl: ToastController ,private _productoservice : ProductoService) {

  }

  ngOnInit(){
    let ref = this._productoservice.GetProductoV();
    ref.once("value",snapshot=>{
      snapshot.forEach(child =>{
        console.log("he encontrado "+child.val().Nombre);

        let product:IVenta={
          "Id":child.val().Id,
          "Nombre": child.val().Nombre,        
          "Precio": child.val().Precio,      
      }
      this.Ventas.push(product);
        
        
      })
    })

    
  }
  enviar(id:number,nombre:string,precio:number){
    let product:IEnvio={

      "Id": id,
      "Nombre": nombre,
      "Precio": precio,
      "Punt" : this.Puntuacion



    }
    this._productoservice.setEnvio(product)
    console.log("Elemento insertado")}
}
