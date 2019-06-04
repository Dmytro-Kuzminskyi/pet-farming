import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShNormalComponent } from './sh-normal.component';

describe('ShNormalComponent', () => {
  let component: ShNormalComponent;
  let fixture: ComponentFixture<ShNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
