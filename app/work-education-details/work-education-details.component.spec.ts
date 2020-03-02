import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEducationDetailsComponent } from './work-education-details.component';

describe('WorkEducationDetailsComponent', () => {
  let component: WorkEducationDetailsComponent;
  let fixture: ComponentFixture<WorkEducationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkEducationDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
