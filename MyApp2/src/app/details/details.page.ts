import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHogar, IMotor, IProducto, ITecno } from '../Interfaces';
import { ProductoService } from '../services/productos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  Productos: (IProducto| IMotor| IHogar| ITecno )

  Id:number;
  Nombre: string="";
  Descripcion: string="";
  Precio: number;
  Tipo: string;
//tipo veiculo
  Ano: number;
  Km: number;
  TipoC: string="";
//Tipo mobiliaria
Metros: number;
Habitaciones: number;
Banos: number;
Localidad: string="";
//Tipo Tecno
estado: string="";


  constructor(private _activatedRoute: ActivatedRoute,private _productoservice : ProductoService) { }

  ngOnInit() {
    this.Id = + this._activatedRoute.snapshot.paramMap.get('id');
    let ref = this._productoservice.GetProducto();
    ref.once("value",snapshot=>{
      snapshot.forEach(child =>{
        console.log("he encontrado "+child.val().Nombre);

if(this.Id==child.val().Id){

        this.Nombre=child.val().Nombre;
        this.Descripcion= child.val().Precio;
        this.Precio=child.val().Descripon;
        this.Tipo= child.val().Tipo;

    if(child.val().Tipo=="Motor"){

      this.Ano=child.val().Ano;
      this.Km=child.val().Km;
      this.TipoC=child.val().TipoC;


    }
      
      if(child.val().Tipo=="Hogar"){


        this.Habitaciones=child.val().Habitaciones
        this.Metros=child.val().Metros
        this.Banos=child.val().Banos
        this.Localidad=child.val().Localidad
       

      }
        
      if(child.val().Tipo=="Tec"){
      

          this.estado=child.val().Estado

        
        

      }
    }
  })})}}
    /*
   
 this.Id = + this._activatedRoute.snapshot.paramMap.get('id');
 console.log("recibido - "+this.Id);
 let res=this._productoservice.GetProductoId(this.Id);
 this.Nombre=res.Nombre
 this.Descripcion=res.Descripcion
 this.Precio=res.Precio
 this.Tipo=res.Tipo

 if(res.Tipo=="Motor"){
  this.Ano=res.Ano
  this.Km=res.Km
  this.TipoC=res.TipoC
 }
 if(res.Tipo=="Hogar"){
  this.Habitaciones=res.Habitaciones
  this.Metros=res.Metros
  this.Banos=res.Banos
  this.Localidad=res.Localidad
}
if(res.Tipo=="Tec"){
  this.estado=res.estado

}

 */
  