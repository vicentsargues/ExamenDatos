import { Component } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IHogar, IMotor, IProducto, ITecno } from '../Interfaces';
import { ProductoService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  oculto : number = 0 ;
  Nombre: string;
  Descripcion: string;
  Precio: number;
//tipo veiculo
  Ano: number;
  Km: number;
  TipoC: string;
//Tipo mobiliaria
Metros: number;
Habitaciones: number;
Banos: number;
Localidad: string;
//Tipo Tecno
estado: string;

Productos: (IProducto| IMotor| IHogar| ITecno )[]=[]



  constructor(private _toastCtrl: ToastController ,private _productoservice : ProductoService) {

  }

  ngOnInit(){
    let ref = this._productoservice.GetProducto();
    ref.once("value",snapshot=>{
      snapshot.forEach(child =>{
        console.log("he encontrado "+child.val().Nombre);

        
        if(child.val().Tipo=="Motor"){
        let product:IMotor={
          "Id":child.val().Id,
          "Nombre": child.val().Nombre,
          "Descripcion": child.val().Precio,
          "Precio": child.val().Descripon,
          "Tipo": child.val().Tipo,
          "Km": child.val().Nombre,
          "Ano": child.val().Nombre,
          "TipoC": child.val().Nombre
        }
        this.Productos.push(product);
      }
        
        if(child.val().Tipo=="Hogar"){
          let product:IHogar={
            "Id":child.val().Id,
            "Nombre": child.val().Nombre,
            "Descripcion": child.val().Precio,
            "Precio": child.val().Descripon,
            "Tipo": child.val().Tipo,
            "Mertos": child.val().Metros,
            "Habitaciones": child.val().Habitaciones,
            "Banos": child.val().Banos,
            "Localidad": child.val().Localidad,
          }
          this.Productos.push(product);
        }
          
        if(child.val().Tipo=="Tec"){
          let product:ITecno={
            "Id":child.val().Id,
            "Nombre": child.val().Nombre,
            "Descripcion": child.val().Precio,
            "Precio": child.val().Descripon,
            "Tipo": child.val().Tipo,
            "Estado": child.val().Estado,

          }
          
          this.Productos.push(product);
        }

        
      })
    })
    //this.Productos=this._productoservice.GetProducto();
  }



  insert1M(){
    let product:IMotor={
      "Id":this.Productos.length + 1,
      "Nombre": this.Nombre,
      "Descripcion": this.Descripcion,
      "Precio": this.Precio,
      "Tipo": "Motor",
      "Km": this.Km,
      "Ano": this.Ano,
      "TipoC": "Moto",
      
      
    }
  this._productoservice.setProducto(product)
  this.Productos.push(product);
  console.log("Elemento insertado")
  }
    insert1C(){
      let product:IMotor={
        "Id":this.Productos.length + 1,

  
        "Nombre": this.Nombre,
        "Descripcion": this.Descripcion,
        "Precio": this.Precio,
        "Tipo": "Motor",
        "Km": this.Km,
        "Ano": this.Ano,
        "TipoC": "Coche"
      }
      this.Productos.push(product);
      this._productoservice.setProducto(product)
      console.log("Elemento insertado");}
  insert2(){
    let product:IHogar={
      "Id":this.Productos.length + 1,

      "Nombre": this.Nombre,
      "Descripcion": this.Descripcion,
      "Precio": this.Precio,
      "Tipo": "Hogar",
      "Mertos": this.Metros,
      "Habitaciones": this.Habitaciones,
      "Banos": this.Banos,
      "Localidad": this.Localidad,

    }
    this.Productos.push(product);
    this._productoservice.setProducto(product)
    console.log("Elemento insertado")}
    insert3N(){
      let product:ITecno={
        "Id":this.Productos.length + 1,

        "Nombre": this.Nombre,
        "Descripcion": this.Descripcion,
        "Precio": this.Precio,
        "Tipo": "Tec",
        "Estado":"Nuevo"

      }
     this.Productos.push(product);
      this._productoservice.setProducto(product)
      console.log("Elemento insertado")}
    
      insert3U(){
        let product:ITecno={
          "Id":this.Productos.length + 1,

          "Nombre": this.Nombre,
          "Descripcion": this.Descripcion,
          "Precio": this.Precio,
          "Tipo": "Tec",
          "Estado":"Usado"
  
        }
        this.Productos.push(product);
        this._productoservice.setProducto(product)
        console.log("Elemento insertado")}
      

      }
