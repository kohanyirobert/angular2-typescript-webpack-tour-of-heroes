import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component'

export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
])
