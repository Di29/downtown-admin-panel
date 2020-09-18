import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubserviceUpsertComponent } from './subservice-upsert.component';

describe('SubserviceUpsertComponent', () => {
  let component: SubserviceUpsertComponent;
  let fixture: ComponentFixture<SubserviceUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubserviceUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubserviceUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
