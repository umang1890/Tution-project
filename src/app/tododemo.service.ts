import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { task } from './todo/task';



@Injectable({
  providedIn: 'root'
})
export class TododemoService {

  url:string='http://localhost:3000/task/';
  constructor(private _task:HttpClient) {

   }
   getlltask(){
    return this._task.get(this.url);
  };
  addtask(item:task){
    let body=JSON.stringify(item);
    let s=new HttpHeaders().set('Content-Type','application/json');
    return this._task.post(this.url,body,{headers:s});

  }
  deletetask(item:task){
    let t=new HttpHeaders().set('Content-Type','application/json');
    return this._task.delete(this.url+item.id,{headers:t});
  }



}
