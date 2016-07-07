import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'

import { AppComponent } from './app.component'
import { APP_ROUTER_PROVIDERS } from './app.routes'
import { InMemoryDataService } from './in-memory-data.service'

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  {
    provide: XHRBackend,
    useClass: InMemoryBackendService,
  },
  {
    provide: SEED_DATA,
    useClass: InMemoryDataService,
  },
])
