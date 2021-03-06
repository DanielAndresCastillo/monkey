import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Temporal
import { FormsModule } from '@angular/forms';



// Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PageModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
