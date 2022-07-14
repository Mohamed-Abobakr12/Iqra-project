import { LoginService } from './../services/login/login.service';
import { LoginComponent } from './../login/login.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private auth:LoginService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.auth.logout();
  }
}
