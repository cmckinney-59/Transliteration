import { Routes } from '@angular/router';

import { BaybayinPageComponent } from './pages/baybayin-page/baybayin-page.component';
import { AurebeshPageComponent } from './pages/aurebesh-page/aurebesh-page.component';
import { DeseretPageComponent } from './pages/deseret-page/deseret-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
    { path: 'baybayin', component: BaybayinPageComponent},
    { path: 'aurebesh', component: AurebeshPageComponent},
    { path: 'deseret', component: DeseretPageComponent},
    { path: 'about', component: AboutPageComponent}
];
