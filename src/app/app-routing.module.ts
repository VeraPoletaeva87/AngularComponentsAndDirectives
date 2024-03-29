import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './youTube/pages/details/details.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { CreateCardComponent } from './youTube/pages/cardCreationForm/card.component';
import { FavoriteComponent } from './youTube/pages/favorites/favorites.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/modules/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./youTube/modules/youTube.module').then((m) => m.YouTubeModule),
  },
  {
    path: 'create-card',
    component: CreateCardComponent,
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
