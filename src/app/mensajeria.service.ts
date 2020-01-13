import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Url } from 'url';


@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor(private http: HttpClient) { }

  contactoDaniel(ContactoDanielModel:any){
      let headers = new HttpHeaders({'Content-type':'application/json','X-Requested-With': 'XMLHttpRequest'});
      // let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
      return this.http.post("http://freshfoodmarket.co/Api/Mensajeria/contactodaniel",JSON.stringify(ContactoDanielModel),{headers:headers})
      // return this.http.post("http://localhost:29354/Api/Mensajeria/contactodaniel",JSON.stringify(ContactoDanielModel),{headers:headers})
    
  }

  contactoDanielGet(nombre,asunto,correo,telefono,mensaje : string  ){
    let headers = new HttpHeaders({'Content-type':'application/json'});
    let url:string=  `http://freshfoodmarket.co/Api/Mensajeria/contactodaniel?nombre=${nombre}&asunto=${asunto}&correo=${correo}&telefono=${telefono}&mensaje=${mensaje}`;
    // let url:string=  `http://localhost:29354/Api/Mensajeria/contactodaniel?nombre=${nombre}&asunto=${asunto}&correo=${correo}&telefono=${telefono}&mensaje=${mensaje}`;
    // let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
    return this.http.get(url,{headers:headers})
  }
}
