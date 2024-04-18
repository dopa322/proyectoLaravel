import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth-profile/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user:any = null;// pongo la variable usuario en le component
  constructor(
    public authService: AuthService,
  ){}

  ngOnInit(): void {
      this.user = this.authService.user;
      console.log(this.user);// espara  ver lo que pasa 
  }
  logout(){
    this.authService.logout();
  }
}
