import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUpsertComponent } from './call-upsert.component';

describe('CallUpsertComponent', () => {
  let component: CallUpsertComponent;
  let fixture: ComponentFixture<CallUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
