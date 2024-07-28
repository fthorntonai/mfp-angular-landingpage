import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { ContentComponent } from './components/content/content.component';
const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }