import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';
import { HistoricalComponent } from './historical/historical.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'nba', component: FindComponent},
    {path:'past', component: HistoricalComponent},
    {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes,  {scrollPositionRestoration: 'enabled'});
