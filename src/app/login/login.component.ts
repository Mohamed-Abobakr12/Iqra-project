import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string ='';
  password:string ='';

  constructor(private auth1:LoginService) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.email == '') {alert('Please enter email correctly');return;}
    if(this.password == '') {alert('Please enter password correctly');return;}

    this.auth1.login(this.email,this.password)
    this.email = '';
    this.password = '';
  }
  
  signInWithGoogle()
  {
    this.auth1.signinwithgoogle();
  }
}
