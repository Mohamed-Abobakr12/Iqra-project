import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string ='';
  password:string ='';

  constructor(private auth1:LoginService) { }

  ngOnInit(): void {
  }

  signup()
  {
    
    if(this.email == '') {alert('Please enter email correctly');return;}
    if(this.password == '') {alert('Please enter password correctly');return;}

    this.auth1.signup(this.email,this.password)
    this.email = '';
    this.password = '';
  }
}
