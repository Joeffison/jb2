import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'Jardim Botânico 2';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.parallax').parallax();
  }

}
