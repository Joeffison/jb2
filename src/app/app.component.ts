import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Jardim Botânico 2';

  ngAfterViewInit() {
    $('.parallax').parallax();
  }
}
