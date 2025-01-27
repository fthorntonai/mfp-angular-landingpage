import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', pathMatch:"prefix", loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'landing',  pathMatch:"prefix",loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'profile',  pathMatch:"prefix",loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
