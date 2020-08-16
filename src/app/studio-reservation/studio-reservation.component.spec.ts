import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioReservationComponent } from './studio-reservation.component';

describe('StudioReservationComponent', () => {
  let component: StudioReservationComponent;
  let fixture: ComponentFixture<StudioReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
