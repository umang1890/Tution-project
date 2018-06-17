 import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductdemoService {
url:string='http://localhost:3000/product/'
  constructor(private _http:HttpClient) { }

getllproduct(){
  return this._http.get(this.url);
};

addproduct(item:product){
  let body=JSON.stringify(item);
  let s=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.url,body,{headers:s});

}
deleteproduct(item:product){
  let s=new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url+item.p_id,{headers:s});
}


}
