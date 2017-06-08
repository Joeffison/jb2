import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatscardComponent } from './whatscard.component';

describe('WhatscardComponent', () => {
  let component: WhatscardComponent;
  let fixture: ComponentFixture<WhatscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
