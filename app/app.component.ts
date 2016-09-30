import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  styles: [require('./app.component.scss')],
  template: require('./app.component.html'),
})
export class AppComponent {

  title = 'Tour of Heroes'
}
