import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { TestBindingsComponent } from './test-bindings/test-bindings.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { TestPredefinedPipesComponent } from './test-predefined-pipes/test-predefined-pipes.component';
import { TestEmployeeTableComponent } from './test-employee-table/test-employee-table.component';
import { TestEmployeeTableJsonComponent } from './test-employee-table-json/test-employee-table-json.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { FilterPipe } from './filter.pipe';
import { ModelFormComponent } from './model-form/model-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondCompComponent,
    TestBindingsComponent,
    TestDirectiveDirective,
    TestPredefinedPipesComponent,
    TestEmployeeTableComponent,
    TestEmployeeTableJsonComponent,
    ParentComponent,
    ChildComponent,
    UsersListComponent,
    FilterPipe,
    ModelFormComponent,
    TemplateFormComponent,
    HomeComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
