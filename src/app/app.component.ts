import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import 'rxjs/Rx';

declare var ga:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Jardim Botânico 2';
  private currentRoute:string;

  constructor(_router:Router) {
    // Using Rx's built in `distinctUntilChanged ` feature to handle url change c/o @dloomb's answer
    _router.events.distinctUntilChanged((previous: any, current: any) => {
      // Subscribe to any `NavigationEnd` events where the url has changed
      if(current instanceof NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    }).subscribe((x: any) => {
      ga('set', 'page', x.url);
      ga('send', 'pageview');
    });
  }

}
