import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whatscard',
  templateUrl: './whatscard.component.html',
  styleUrls: ['./whatscard.component.sass']
})
export class WhatscardComponent implements OnInit {

  @Input() name: string;
  @Input() number: number;

  @Input() title: string;
  @Input() icon: string = 'group';

  tel: string;

  constructor() { }

  ngOnInit() {
    this.tel = this.number + "";
    this.tel = this.tel.substring(0,4) + "-" + this.tel.substring(4);
  }

}
