import { NgModule } from '@angular/core';
import { RegisterComponent } from './views/login/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';



const app_routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: '', component: LoginComponent},
    {path: 'login', component: AppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }