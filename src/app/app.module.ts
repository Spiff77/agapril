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

const routes: Routes=[
  {path: "",redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "main", component: MainParentComponent},
  {path: "secondary", component: SecondaryParentComponent},
  {path: "**", component: Error404Component},
]

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
