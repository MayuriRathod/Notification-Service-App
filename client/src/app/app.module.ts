import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { GenresPageComponent } from './genres-page/genres-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const approutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'genres', component: GenresPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    AboutUsPageComponent,
    GenresPageComponent,
    LoginPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
