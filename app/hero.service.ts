import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Hero } from './hero'

@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes'

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  getHero(id: number) {
    return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0])
  }

  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  private put(hero: Hero) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http
      .put(`${this.heroesUrl}/${hero.id}`, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero)
    }
    return this.post(hero)
  }

  delete(hero: Hero) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http
      .delete(`${this.heroesUrl}/${hero.id}`, headers)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log('Error', error)
    return Promise.resolve(error.message || error)
  }
}
