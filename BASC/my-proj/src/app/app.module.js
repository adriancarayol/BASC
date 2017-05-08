"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile/profile.component");
var project_component_1 = require("./project/project.component");
var search_component_1 = require("./search/search.component");
var home_component_1 = require("./home/home.component");
var signup_component_1 = require("./signup/signup.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'signup', component: signup_component_1.SignUpComponent }
];
var appRoutingProviders = [];
var routing = router_1.RouterModule.forRoot(appRoutes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            routing
        ],
        providers: [appRoutingProviders
        ],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, about_component_1.AboutComponent,
            profile_component_1.ProfileComponent, project_component_1.ProjectComponent, search_component_1.SearchComponent, home_component_1.HomeComponent, signup_component_1.SignUpComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map