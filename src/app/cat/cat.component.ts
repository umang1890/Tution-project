import { Component, OnInit } from "@angular/core";
import { catclass } from "./cat";
import { CatdemoService } from "../catdemo.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.css"]
})
export class CatComponent implements OnInit {
  id: number;
  name: string;
  active: string = "yes";
  arr: catclass[] = [];

  constructor(private cat1: CatdemoService, private _route: Router) {}

  onadd() {
    this.cat1
      .addcat(new catclass(this.id, this.name, this.active))
      .subscribe((data: any) => {
        console.log(data);
        this.arr.push(new catclass(this.id, this.name, this.active));
      });
  }
  onupdate(item: catclass) {
    if (item.active == "yes") item.active = "no";
    else item.active = "yes";
  }

  ondelete(item: catclass) {
    this.cat1.deletecat(item).subscribe((data: any) => {
      console.log(data);
      this.arr.splice(this.arr.indexOf(item), 1);
    });
  }

  flag: boolean = false;
  onadd1() {
    if (this.flag == true) this.flag = false;
    else this.flag = true;
  }

  ngOnInit() {
    this.cat1.getallcat().subscribe((data: catclass[]) => {
      this.arr = data;
    });
  }

  onupdate1(item: catclass) {
    this._route.navigate(['/editcat', item.id]);
  }
}
