import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUpsertComponent } from './service-upsert.component';

describe('ServiceUpsertComponent', () => {
  let component: ServiceUpsertComponent;
  let fixture: ComponentFixture<ServiceUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
