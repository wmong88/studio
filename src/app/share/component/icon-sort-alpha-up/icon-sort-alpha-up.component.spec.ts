import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSortAlphaUpComponent } from './icon-sort-alpha-up.component';

describe('IconSortAlphaUpComponent', () => {
  let component: IconSortAlphaUpComponent;
  let fixture: ComponentFixture<IconSortAlphaUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSortAlphaUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSortAlphaUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
