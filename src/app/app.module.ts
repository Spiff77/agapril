import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainParentComponent } from './main-parent/main-parent.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';
import { ChildComponent } from './child/child.component';
import { TotalComponent } from './plusone/total/total.component';
import { CountelemComponent } from './plusone/countelem/countelem.component';
import { StrLengthPipe } from './str-length.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserTemplateComponent } from './add-user-template/add-user-template.component';

const routes: Routes=[
  {path: "",redirectTo: "/home", pathMatch: "full"},
  {path: "user/addtemplate", component: AddUserTemplateComponent},
  {path: "user/add", component: AddUserComponent},
  {path: "home", component: HomeComponent},
  {path: "home/:id", component: HomeComponent},
  {path: "main", component: MainParentComponent},
  {path: "secondary", component: SecondaryParentComponent},
  {path: "**", component: Error404Component},
]

/**
 * /products ---> ProductListComponent
 * /products/add ---> ProductAddComponent
 * /products/:id ---> ProductDetailComponent
 * /home --> HomeComponent
 * / ---redirect---> /home
 * ** -----> Error404ComponentÒ
 **/

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    SecondaryParentComponent,
    ChildComponent,
    TotalComponent,
    CountelemComponent,
    StrLengthPipe,
    HomeComponent,
    Error404Component,
    AddUserComponent,
    AddUserTemplateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
