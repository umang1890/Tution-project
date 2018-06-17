import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{  FormsModule} from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { TodoComponent } from './todo/todo.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { CatComponent } from './cat/cat.component';
import { HederComponent } from './heder/heder.component';
import { routing } from './app.routing';
import { CateditComponent } from './cat/catedit/catedit.component';
import { EmpeditComponent } from './employee/empedit/empedit.component';
@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    TodoComponent,
    StudentComponent,
    ProductComponent,
    EmployeeComponent,
    CatComponent,
    HederComponent,
    CateditComponent,
    EmpeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
