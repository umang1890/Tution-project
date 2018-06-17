import { Component, OnInit } from '@angular/core';
import { task } from './task';
import { TododemoService } from '../tododemo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
id:number;
title:string;
 status:string='done';
 arr:task[]=[
  new task(1,'email to your manager','pending'),
  new task(2,'push your code to github','pending'),
  new task(3,'go for movie','done')
]
onadd(){

  this._task.addtask(new task(this.id,this.title,this.status)).subscribe(
    (data:any)=>{
      console.log(data);
this.arr.push(new task(this.id,this.title,this.status));
}
  );
}
ondelete(item:task){

  this._task.deletetask (item).subscribe(
    (data:any)=>{
      console.log(data);
  this.arr.splice(this.arr.indexOf(item),1);
}
  );
}
onupdate(item:task)
{
  if(item.status=="done")
  item.status="pending";
  else
  item.status="done";

}

  constructor(private _task:TododemoService ) { }

  ngOnInit() {

    this._task.getlltask().subscribe(
      (data:task[])=>{
        this.arr=data;
      }
    );
  }

}
