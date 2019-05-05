import { Component } from '@angular/core';

@Component({
  selector: 'easiris-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'easiris-front';
  network = 'nx';

  constructor() {
    // if(this.network === 'nx') {
    //   require('style-loader!../styles/styles-nx.css');
    // } else {
    //   require('style-loader!../styles/styles-ce.css');
    // }
  }
}
