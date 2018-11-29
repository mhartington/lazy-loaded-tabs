import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'about',
        outlet: 'home',
        loadChildren: '../about/about.module#AboutPageModule'
      },
      {
        path: 'about',
        outlet: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
