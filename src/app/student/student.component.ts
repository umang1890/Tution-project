import { Component, OnInit } from '@angular/core';
import { student } from './stu';
import { StudentdemoService } from "../studentdemo.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
s_id:number;
s_name:string;
s_gender:string='male';
s_number:number;
s_status:string='yes';
arr:student[]=[]
onadd(){
this._stu.addstudent(new student(this.s_id,this.s_name,this.s_gender,this.s_number,this.s_status)).subscribe(
  (data:any)=>{
    console.log(data);

    this.arr.push(new student(this.s_id,this.s_name,this.s_gender,this.s_number,this.s_status));

  }
)

  }
flag:boolean=false;
onadd1
()
{
  if(this.flag==false)
  this.flag=true;
  else
  this.flag=false;
}

  onupdate(item:student)
  {
    if(item.s_status=="done")
    item.s_status="pending";
    else
    item.s_status="done";
  }
  ondelete(item:student){

    this._stu.deletestudent (item).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.splice(this.arr.indexOf(item),1);
      }
    );
 }

constructor(private _stu:StudentdemoService ) { }

  ngOnInit() {
    this._stu.getAllstudent().subscribe(
      (data:student[])=>{
        this.arr=data;
      }
    );
  }
}
