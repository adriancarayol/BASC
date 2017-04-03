import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent }from './login/login.component';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
	{path: '**', component: LoginComponent}
];

@NgModule({
  imports:	[ BrowserModule,
  			  RouterModule.forRoot(appRoutes)
   ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
