import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChatUpsertComponent } from './service-chat-upsert.component';

describe('ServiceChatUpsertComponent', () => {
  let component: ServiceChatUpsertComponent;
  let fixture: ComponentFixture<ServiceChatUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChatUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChatUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
