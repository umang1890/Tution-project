import { Component, OnInit } from '@angular/core';
import{ product } from'./product';
import { ProductdemoService } from '../productdemo.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

flag:boolean=false


  constructor(private product1:ProductdemoService) { }

  p_id:number;
p_name:string;
p_price:number;
p_status:string='yes';
arr:product[]=[]
onadd(){
  this.product1.addproduct(new product(this.p_id,this.p_name,this.p_price,this.p_status)).subscribe(
    (data:any)=>{
      console.log(data);
this.arr.push(new product(this.p_id,this.p_name,this.p_price,this.p_status));
}
  );
}
ondelete(item:product){

    this.product1.deleteproduct (item).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.splice(this.arr.indexOf(item),1);
      }
    );
 }
onadd1()
{
  if(this.flag==false)
  this.flag=true;
  else
  this.flag=false;
}

onupdate(item:product) {
  if (item.p_status == "avilable")
  item.p_status = "sold out";
  else item.p_status = "avilable";
}

  ngOnInit() {
    this.product1.getllproduct().subscribe(
      (Data:product[])=>{
        this.arr=Data;
      }
    );
  }





}
