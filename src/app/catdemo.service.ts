import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catclass } from './cat/cat';
@Injectable({
  providedIn: 'root'
})
export class CatdemoService {
url:string='http://localhost:3000/cat/';
constructor(private _cat:HttpClient) { }
getallcat(){
  return this._cat.get(this.url);
}
getcat1(id){
  return this._cat.get(this.url+id);

}

addcat(item:catclass){
  let body=JSON.stringify(item);
  let c=new HttpHeaders().set('Content-Type','application/json');
  return this._cat.post(this.url,body,{headers:c});

}

editcat(item:catclass){
  let body=JSON.stringify(item);
  let c=new HttpHeaders().set('Content-Type','application/json');
  return this._cat.post(this.url+item.id,body,{headers:c});

}


deletecat(item:catclass){
let c=new HttpHeaders().set('Content-Type','application/json');
return this._cat.delete(this.url+item.id,{headers:c});
}




}
