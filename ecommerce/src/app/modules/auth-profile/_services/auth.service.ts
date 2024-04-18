import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { URL_SERVICIOS } from 'src/app/config/config';
import { map , catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* inicializamos 2 variables */
  user:any;
  token:any = '';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    //tiene que CARGARSE EL USUARIO Y TOKEN
    this.loadStorage();
   }

   loadStorage(){
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.user = JSON.parse (localStorage.getItem("user")?? ''); // ver mas sobre esto 
    }
    else{
      this.token = '';
      this.user = null;
    }
   }

   /* primera funcion login */
   login(email:string, password:string){
    /* definimos el url antes de ejecutar el servicio */
    let URL = URL_SERVICIOS + '/users/login';
    return this.http.post(URL,{email,password}).pipe(
      map((resp:any)=>{
        if(resp.access_token){
          //ALMACENAR EN EL LOCALSTORAGE LA INFORMACION
          return this.saveLocalStorageResponse(resp);
        }else{
          return resp;
        }
      }),
      catchError((err:any)=>{
        return of(err);
      })
    );// el pipe ayuda a optener la respuesta de nuestro backen 
   }

  saveLocalStorageResponse(resp: any) {
    if(resp.access_token && resp.user){
      localStorage.setItem("token",resp.access_token);// el token es un string
      localStorage.setItem("user",JSON.stringify(resp.user) );// el user es un json y se guarda de esta manera, el stringify es para 
      //trasformar un json a un string

      /* ahora inicializamos */
      this.user = resp.user;
      this.token = resp.access_token;
      //this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  /* ahora hacemos para registro */
  registro(data: any) {
    /* definimos el url antes de ejecutar el servicio */
    let URL = URL_SERVICIOS + '/users/register';
    return this.http.post(URL, data);
   }

   /* el logout es la salida de todo  */
   logout(){
    
    this.user = null;
    this.token = '';
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['auth/login']);//hacemos una redireccion al home
   }
}


