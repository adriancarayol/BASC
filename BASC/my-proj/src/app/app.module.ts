import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent }from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes:Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'about', component: AboutComponent}
];

const appRoutingProviders: any[] = [

];

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports:	[ BrowserModule,
  			  routing
   ],
   providers: [ appRoutingProviders
   ],
  declarations: [ AppComponent, LoginComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
