import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Hero } from  './hero'
import { HeroService } from  './hero.service'

@Component({
  selector: 'my-hero-detail',
  styles: [require('./hero-detail.component.scss')],
  template: require('./hero-detail.component.html'),
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  private subscription: any
  error: any
  navigated = false

  @Input()
  hero: Hero

  @Output()
  close = new EventEmitter()

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.navigated = true
        this.heroService.getHero(+id).then(hero => this.hero = hero)
      } else {
        this.navigated = false
        this.hero = new Hero()
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  save() {
    this.heroService.save(this.hero)
      .then(hero => {
        this.hero = hero
        this.goBack(hero)
      })
      .catch(error => this.error = error)
  }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero)
    if (this.navigated) {
      window.history.back()
    }
  }
}
