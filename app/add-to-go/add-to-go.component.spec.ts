import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToGoComponent } from './add-to-go.component';

describe('AddToGoComponent', () => {
  let component: AddToGoComponent;
  let fixture: ComponentFixture<AddToGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
