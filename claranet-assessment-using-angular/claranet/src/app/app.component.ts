import { Component } from '@angular/core';
import beers from './_file/beers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claranet';
  public beersList = beers['data'];
  public keys = Object.keys(beers['data'][0])

  showTable = false;
  toggleTable() {
    this.showTable = true;
  }
}
