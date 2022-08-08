import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMypersonajeComponent } from './card-mypersonaje.component';

describe('CardMypersonajeComponent', () => {
  let component: CardMypersonajeComponent;
  let fixture: ComponentFixture<CardMypersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMypersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMypersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
