import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { empclass } from './employee/empclass';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string='http://localhost:3000/employee/'
  constructor(private _emp:HttpClient) { }
  getallemployee(){
    return this._emp.get(this.url);
  }
  getemp(id){
    return this._emp.get(this.url+id);
  }

  addemployee(item:empclass){
    let body=JSON.stringify(item);
    let s=new HttpHeaders().set('Content-Type','application/json');
    return this._emp.post(this.url,body,{headers:s});

  }
  editemployee(item:empclass){
    let body=JSON.stringify(item);
    let e=new HttpHeaders().set('Content-Type','application/json');
    return this._emp.post(this.url+item.eid,body,{headers:e});

  }

deleteemployee(item:empclass){
  let e=new HttpHeaders().set('Content-Type','application/json');
  return this._emp.delete(this.url+item.eid,{headers:e});
}



}
