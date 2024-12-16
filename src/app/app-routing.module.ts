import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  // { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
  // { path: '', redirectTo: '/about', pathMatch: 'full' }, 
  // { path: '**', redirectTo: '/about' } 
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' , anchorScrolling: 'enabled' })],
  // exports: [RouterModule]
})
export class AppRoutingModule {

 }
