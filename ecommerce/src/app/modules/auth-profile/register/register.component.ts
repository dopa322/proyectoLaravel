import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit  {
  name:any = null;
  surname:any = null;
  email:any = null;
  password:any = null;
  repit_password:any = null;

  /* en esto va la instancia a la llamada auth service */
  constructor(
    public authService:AuthService,
    public router:Router,
  ) { }

  ngOnInit(): void {

  }

  registro(){
    /* colocamos unas condiciones de validaciones  */
    if(!this.surname ||!this.name ||!this.email || !this.password || !this.repit_password){
      alert("Debes llenar todos los campos para el registro");
      return;
    }
    if(this.password != this.repit_password){
      alert("Las contraseñas no coinciden");
      return;
    }
    let data = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      //repit_password: this.repit_password
    };
    this.authService.registro(data).subscribe((resp:any) =>{
      console.log(resp);
      this.router.navigate(['auth/login']); //nos redirige al login
      //document.location.reload();//recargar la misma pagina 
    });
  }
}
