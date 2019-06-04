import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetGridListComponent } from './pet-grid-list.component';

describe('PetGridListComponent', () => {
  let component: PetGridListComponent;
  let fixture: ComponentFixture<PetGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
