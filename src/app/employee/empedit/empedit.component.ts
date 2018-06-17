import { Component, OnInit } from "@angular/core";
import { empclass } from "../empclass";
import { EmployeeComponent } from "../employee.component";
import { EmployeeService } from "../../employee.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-empedit",
  templateUrl: "./empedit.component.html",
  styleUrls: ["./empedit.component.css"]
})
export class EmpeditComponent implements OnInit {
  eid: number;
  ename: string;
  egender: string="male";
  estatus: string = "done";
  arr: string[] = ["done", "pending"];
  arr1: empclass[] = [];

  constructor(
    public _route: Router,
    public aroute: ActivatedRoute,
    public _data: EmployeeService
  ) {}

  onupdate() {
    this._data.editemployee(new empclass(this.eid, this.ename,this.egender, this.estatus));
    (data: any) => {
      console.log(data);
      this._route.navigate(["/employee"]);
    };
  }
  ngOnInit() {
    this.eid = this.aroute.snapshot.params["id"];
    this._data.getemp(this.eid).subscribe((data: empclass[]) => {
      this.ename = data[0].ename;
      this.egender=data[0].egender;
      this.estatus =data[0].estatus;
    });
  }
}
