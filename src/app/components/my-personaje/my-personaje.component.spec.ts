import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonajeComponent } from './my-personaje.component';

describe('MyPersonajeComponent', () => {
  let component: MyPersonajeComponent;
  let fixture: ComponentFixture<MyPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
