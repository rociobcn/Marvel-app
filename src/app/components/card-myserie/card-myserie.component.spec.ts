import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyserieComponent } from './card-myserie.component';

describe('CardMyserieComponent', () => {
  let component: CardMyserieComponent;
  let fixture: ComponentFixture<CardMyserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMyserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMyserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
