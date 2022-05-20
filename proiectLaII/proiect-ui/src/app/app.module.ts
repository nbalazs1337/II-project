import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './main-page/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    NavbarComponent,
    AboutComponent,
    ProductComponent,
    BrandsListComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
