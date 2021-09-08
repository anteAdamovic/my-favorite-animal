import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalPageModule } from '../pages/animal/animal.module';
import { AnimalPage } from '../pages/animal/animal.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'animals',
        loadChildren: () => import('../pages/animals/animals.module').then(m => m.AnimalsPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/animals',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/animals',
    pathMatch: 'full'
  },
  {
    path: 'animals/:id',
    component: AnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AnimalPageModule],
})
export class TabsPageRoutingModule {}
