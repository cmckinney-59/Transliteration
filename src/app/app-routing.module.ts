import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaybayinPageComponent } from './pages/baybayin-page/baybayin-page.component';
import { AurebeshPageComponent } from './pages/aurebesh-page/aurebesh-page.component';
import { DeseretPageComponent } from './pages/deseret-page/deseret-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  { path: 'baybayin', component: BaybayinPageComponent},
  { path: 'aurebesh', component: AurebeshPageComponent},
  { path: 'deseret', component: DeseretPageComponent},
  { path: 'about', component: AboutPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
