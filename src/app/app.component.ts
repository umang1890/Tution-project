import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  no1:number=10;
  ans:number;
  u:string="hello";
  onclick(m,n)
  {
this.ans=parseInt(m)+ parseInt(n);
  }
mul(m,n)
  {
  this.ans=parseInt(m) * parseInt(n);
  }
  sub(m,n){
    this.ans=parseInt(m) - parseInt(n);

    }
    div(m,n){
      this.ans=parseInt(m) / parseInt(n);
      }
}
