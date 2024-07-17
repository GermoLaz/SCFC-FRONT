import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  // el logueo no es necesario, se deja comentado por si necesita en el futuro
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main-page', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
