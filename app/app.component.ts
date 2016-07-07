import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { HeroesComponent } from  './heroes.component'
import { HeroService } from  './hero.service'

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService],
  selector: 'my-app',
  styles: [require('./app.component.scss')],
  template: require('./app.component.html'),
})
export class AppComponent {

  title = 'Tour of Heroes'
}
