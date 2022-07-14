import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set, onValue, object } from '@angular/fire/database';
import { waitForAsync } from '@angular/core/testing';
import { count, timeout } from 'rxjs';
import { Database } from 'firebase/database';
import * as moment from 'moment-timezone';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-photopage',
  templateUrl:'./photopage.component.html',
  styleUrls: ['./photopage.component.css']
})
export class PhotopageComponent implements OnInit {
  
  name :string='';
  date = moment().tz('America/New_York').format('HH:mm:ss z')
  counter : number = 18;

  imgCollection: Array<object> = [];
  
  constructor(private auth:LoginService,private http:HttpClient) 
  {

  }

  async ngOnInit(): Promise<void> 
  {
    setTimeout(() => {
      this.database();
    }, 2000);
     
  }

  onFileUpload(img:any)
  {
      const db = getDatabase();
      const reference = ref(db,'users/'+ "privte_images");
      
      const reader = new FileReader();
      reader.readAsDataURL(img.target.files[0]);

      reader.onload = () => 
      { 
        this.imgCollection.push({image:reader.result,thumbimage:reader.result,title:'image'+this.counter});
        set(reference,{image :{image: '/assets/1.jpg',thumbImage: '/assets/1.jpg',title: 'Image'+this.counter},})
      };
  }
  
  
  database()
  {
    const db = getDatabase();
    const reference = ref(db,'users/'+ "shared_images");
    set(reference,{
      image1 :{image: '/assets/1.jpg',thumbImage: '/assets/1.jpg',title: 'Image 1'}, 
      image2 :{image: '/assets/2.jpg',thumbImage: '/assets/2.jpg',title: 'Image 2'}, 
      image3 :{image: '/assets/3.jpg',thumbImage: '/assets/3.jpg',title: 'Image 3'}, 
      image4 :{image: '/assets/4.jpg',thumbImage: '/assets/4.jpg',title: 'Image 4'}, 
      image5 :{image: '/assets/5.jpg',thumbImage: '/assets/5.jpg',title: 'Image 5'}, 
      image6 :{image: '/assets/6.jpg',thumbImage: '/assets/6.jpg',title: 'Image 6'}, 
      image7 :{image: '/assets/7.jpg',thumbImage: '/assets/7.jpg',title: 'Image 7'}, 
      image8 :{image: '/assets/8.jpg',thumbImage: '/assets/8.jpg',title: 'Image 8'}, 
      image9 :{image: '/assets/9.jpg',thumbImage: '/assets/9.jpg',title: 'Image 9'}, 
      image10 :{image: '/assets/10.jpg',thumbImage: '/assets/10.jpg',title: 'Image 10'}, 
      image11 :{image: '/assets/11.jpg',thumbImage: '/assets/11.jpg',title: 'Image 11'}, 
      image12 :{image: '/assets/12.jpg',thumbImage: '/assets/12.jpg',title: 'Image 12'}, 
      image13 :{image: '/assets/13.jpg',thumbImage: '/assets/13.jpg',title: 'Image 13'}, 
      image14 :{image: '/assets/14.jpg',thumbImage: '/assets/14.jpg',title: 'Image 14'}, 
      image15 :{image: '/assets/15.jpg',thumbImage: '/assets/15.jpg',title: 'Image 15'}, 
      image16 :{image: '/assets/16.jpg',thumbImage: '/assets/16.jpg',title: 'Image 16'}, 
      image17 :{image: '/assets/17.jpg',thumbImage: '/assets/17.jpg',title: 'Image 17'},
      image18 :{image: '/assets/18.jpg',thumbImage: '/assets/18.jpg',title: 'Image 18'},     
    })
    
    onValue(reference,(snapshot:any) => 
    {
      (Object.keys(snapshot.val()) as (keyof typeof object)[]).forEach((key, index) => 
        {
          this.imgCollection.push(snapshot.val()[key]);
        });
    }); 
  }



  logout()
  {
    this.auth.logout();
  }
}
