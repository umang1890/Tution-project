import { Component, OnInit } from "@angular/core";
import { empclass } from "./empclass";

import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  flag: boolean = false;
  eid: number;
  ename: string;
  edes: string;
  egender: string = "male";
  esal: number;
  estatus: string = "yes";

  arr: empclass[] = [];

  constructor(private employee1: EmployeeService, private _route: Router) {}

  onadd() {
    this.employee1
      .addemployee(
        new empclass(this.eid, this.ename, this.egender, this.estatus)
      )
      .subscribe((data: any) => {
        console.log(data);
        this.arr.push(
          new empclass(this.eid, this.ename, this.egender, this.estatus)
        );
      });
  }

  onadd1() {
    if (this.flag == true) this.flag = false;
    else this.flag = true;
  }
  onupdate(item: empclass) {
    if (item.estatus == "yes") item.estatus = "no";
    else item.estatus = "yes";
  }
  onupdate1(item:empclass){
    this._route.navigate(['/empedit',item.eid]);
  }
  ondelete(item: empclass) {
    this.employee1.deleteemployee(item).subscribe((data: any) => {
      console.log(data);
      this.arr.splice(this.arr.indexOf(item), 1);
    });
  }
  ngOnInit() {
    this.employee1.getallemployee().subscribe((data: empclass[]) => {
      this.arr = data;
    });
  }
}
