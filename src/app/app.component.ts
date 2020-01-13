import { Component, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MensajeriaService } from './mensajeria.service';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mensaje:string;
  formContacto:FormGroup;
  formularioDatos:any[]=[];
  constructor(private fb:FormBuilder,private mensajeria:MensajeriaService
    
    ) {
    this.formContacto = this.fb.group(
      {
        'nombre':['',[Validators.required]],
        'asunto':['',[Validators.required]],
        'correo':['',[Validators.required,Validators.email]],
        'mensaje':['',[Validators.required]],
        'telefono':['',[Validators.required]],
      }
    )
  }

  submitContactMe(){
    console.log(this.formularioDatos)
    let datos = new Object();
    datos['nombre'] = this.formularioDatos['nombre'];
    datos['asunto'] = this.formularioDatos['asunto'];
    datos['correo'] = this.formularioDatos['correo'];
    datos['mensaje'] = this.formularioDatos['mensaje'];
    datos['telefono'] = this.formularioDatos['telefono'];

    this.mensajeria.contactoDaniel(datos)
    .subscribe(res => {
      console.log(res)
      if(res['error'] == 0 && res['estado']){
        alert('Mensaje Enviado Con Exito.')
        this.formularioDatos = [];
      }else{
        alert('Error Enviando El Mensaje.')
      }
    },error => {
      console.error(error)
      this.mensajeria.contactoDanielGet(datos['nombre'],datos['asunto'],datos['correo'],datos['telefono'],datos['mensaje'])
      .subscribe(res => {
        console.log(res)
        if(res['error'] == 0 && res['estado']){
          alert('Mensaje Enviado Con Exito.')
          this.formularioDatos = [];
        }else{
          alert('Error Enviando El Mensaje.')
        }
      },error => {
        console.error(error)
      })
    })
  }

  
}
