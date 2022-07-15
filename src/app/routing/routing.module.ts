import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../parent/parent.component';
import { SecondCompComponent } from '../second-comp/second-comp.component';
import { TestPredefinedPipesComponent } from '../test-predefined-pipes/test-predefined-pipes.component';
import { TestEmployeeTableComponent } from '../test-employee-table/test-employee-table.component';
import { TestEmployeeTableJsonComponent } from '../test-employee-table-json/test-employee-table-json.component';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from '../users-list/users-list.component';
import { HomeComponent } from '../home/home.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { AuthGuard } from '../auth.guard';

const routes =[
  {path:'pipes',component:TestPredefinedPipesComponent},
  {path:'parentchild', component:ParentComponent},
  {path:'employees',component:SecondCompComponent,
  children:[
  {path:'empservice',component:TestEmployeeTableComponent},
  {path:'empjson', component:TestEmployeeTableJsonComponent}
  ]},
  {path:'users', component:UsersListComponent},
  {path:'admin', component:AdminPageComponent,canActivate:[AuthGuard]},
  {path:'home', component:HomeComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponents = [AppComponent, HomeComponent, TestPredefinedPipesComponent,ParentComponent, SecondCompComponent, TestEmployeeTableComponent, TestEmployeeTableJsonComponent]
