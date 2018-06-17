import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { student } from './student/stu';

@Injectable({
  providedIn: 'root'
})
export class StudentdemoService {
url:string='http://localhost:3000/student/';
  constructor(private _http:HttpClient) {

   }
   getAllstudent(){
    return this._http.get(this.url);
  };

  addstudent(item:student){
    let body=JSON.stringify(item);
    let s=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:s});

  }
  deletestudent(item:student){
    let s=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.s_id,{headers:s});
  }




}
