import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSortAlphaDownComponent } from './icon-sort-alpha-down.component';

describe('IconSortAlphaDownComponent', () => {
  let component: IconSortAlphaDownComponent;
  let fixture: ComponentFixture<IconSortAlphaDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSortAlphaDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSortAlphaDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
