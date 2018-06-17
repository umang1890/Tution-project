import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { catclass } from "../cat";
import { CatComponent } from "../cat.component";
import { CatdemoService } from "../../catdemo.service";
@Component({
  selector: "app-catedit",
  templateUrl: "./catedit.component.html",
  styleUrls: ["./catedit.component.css"]
})
export class CateditComponent implements OnInit {
  id: number;
  cid: number;
  cname: string;
  cactive: string;
  arr: string[] = ["yes", "no"];
  arr1: catclass[] = [];

  constructor(
    public _route: Router,
    public aroute: ActivatedRoute,
    public _data: CatdemoService
  ) {}

  onupdate() {
    this._data.editcat(new catclass(this.id, this.cname, this.cactive));
    (data: any) => {
      console.log(this._data);
      this._route.navigate(["/cat"]);
    };
  }

  ngOnInit() {
    this.id = this.aroute.snapshot.params["id"];
    this._data.getcat1(this.id).subscribe((data: catclass[]) => {
      this.cname = data[0].name;

      this.cactive =data[0].active;
    });
  }
}
