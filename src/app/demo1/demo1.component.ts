import { Component, OnInit } from '@angular/core';
//import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  a:string;
  constructor() { }

  ngOnInit() {}
no1:number=0;
no2:number=0;
x="";
flag:number=0;
onclick1(m)
{
  this.x+=m;
}
onadd()
{ this.no1=parseInt(this.x)
  this.flag=1
  this.x=""
}
onmul()
{ this.no1=parseInt(this.x)
  this.flag=2
  this.x=""
}
onsub()
{ this.no1=parseInt(this.x)
  this.flag=3
  this.x=""
}
ondiv()
{ this.no1=parseInt(this.x)
  this.flag=4
  this.x=""
}
once()
{
  this.x=""
}
oneq()
{
  this.no2=parseInt(this.x)
  if(this.flag==1)
  {
    this.x=(this.no1+this.no2)+""
  }
  else if(this.flag==2)
  {
    this.x=(this.no1 * this.no2)+""
  }
  else if(this.flag==3)
  {
    this.x=(this.no1 - this.no2)+""
  }
  else if(this.flag==4)
  {
    this.x=(this.no1 / this.no2)+""
  }
}
}

