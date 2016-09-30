import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { HttpModule, XHRBackend } from '@angular/http'

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import './rxjs-extensions'

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component'
import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroSearchComponent } from './hero-search.component'
import { HeroService } from './hero.service'
import { routing } from './app.routes'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
