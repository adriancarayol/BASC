import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent }from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { SearchComponent } from './search/search.component';

const appRoutes:Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'search', component: SearchComponent},
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
  declarations: [ AppComponent, LoginComponent, AboutComponent, ProfileComponent, ProjectComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
