import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { }
  title = 'todo';  
  city:string;
  name:string;
  email:string;
  data:any[]=[];
   submit=(x,y,z)=>{
this.data.push({"name":x,"city":y,"email":z})
// console.log(this.data)
this.name='';
this.city='';
this.email='';

  }
  delete=(a)=>{
   var i = this.data.indexOf(a);
   this.data.splice(a,1)
  }
}
