import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from  './hero'
import { HeroService } from  './hero.service'

@Component({
  selector: 'my-heroes',
  styles: [require('./heroes.component.scss')],
  template: require('./heroes.component.html'),
})

export class HeroesComponent implements OnInit {
  public heroes: Hero[]
  selectedHero: Hero
  addingHero = false
  error: any

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  addHero() {
    this.addingHero = true
    this.selectedHero = null
  }

  close(savedHero: Hero) {
    this.addingHero = false
    if (savedHero) {
      this.getHeroes()
    }
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation()
    this.heroService.delete(hero)
      .then(response => {
        this.heroes = this.heroes.filter(h => h !== hero)
        if (this.selectedHero === hero) {
          this.selectedHero = null
        }
      })
      .catch(error => this.error = error)
  }
}
