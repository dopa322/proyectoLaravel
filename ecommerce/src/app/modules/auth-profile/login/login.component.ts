import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any = null;
  password:any = null;

  constructor(
    public authService:AuthService,
  ) {}

  ngOnInit(): void {
  }
  login(){
    /* hacemos una validacion rapida */
    if(!this.email  || !this.password ){
      alert("Debes ingresar un correo y una contraseña");
      return;
    }
        this.authService.login(this.email, this.password).subscribe((resp:any) => {
          console.log(resp);  
          /* en caso que el usuario sea erroneo */
          if(!resp.error && resp){
            // TODO SALIO BIEN Y VOLVER AL HOME CON USUARIO AUTENTICADO
            document.location.reload(); // es para que recargue la pagina, coomo indicando que todo esta bien
          }else{
            if(resp.error.error == 'Unauthorized'){
              alert("El usuario o contraseña ingresado son incorrectos");
              return;
            }
          }
    })
  }
}
