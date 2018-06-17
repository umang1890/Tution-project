import { Routes,RouterModule  } from '@angular/router';
import {TodoComponent } from './todo/todo.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { CatComponent } from './cat/cat.component';
import { CateditComponent } from './cat/catedit/catedit.component';
import { EmpeditComponent } from './employee/empedit/empedit.component';

const arr:Routes=[

{path:'',component:TodoComponent},
{path:'employee',component:EmployeeComponent},
{path:'product',component:ProductComponent},
{path:'student',component:StudentComponent},
{path:'cat',component:CatComponent},
{path:'editcat/:id',component:CateditComponent},
{path:'empedit/:id',component:EmpeditComponent}



];

export const routing = RouterModule.forRoot(arr);
