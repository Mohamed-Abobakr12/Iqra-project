import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private fireauth : AngularFireAuth, private router2 : Router) { }  

 login(email : string, password : string) 
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => 
    {
      localStorage.setItem('User','true');
      this.router2.navigate(['/homepage']);
    }, err=>
    {
      alert(err.message);
      this.router2.navigate(['/login']);
    })
  }

  signup(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( (res) => 
    {
      alert('Registration Successful');
      this.router2.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router2.navigate(['/signup']);})
  }

  logout() 
  {
    this.fireauth.signOut().then( () => 
    {
      localStorage.removeItem('User');
      this.router2.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router2.navigate(['/signup']);})
  }

  signinwithgoogle()
  {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => 
      {
      this.router2.navigate(['/homepage']);
      localStorage.setItem('User',JSON.stringify(res.user?.uid));
      })
  }

}