import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaybayinPageComponent } from './pages/baybayin-page/baybayin-page.component';

const routes: Routes = [
  { path: 'baybayin', component: BaybayinPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
