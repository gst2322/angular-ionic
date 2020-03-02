import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypopoverComponent } from './mypopover.component';

describe('MypopoverComponent', () => {
  let component: MypopoverComponent;
  let fixture: ComponentFixture<MypopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MypopoverComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
