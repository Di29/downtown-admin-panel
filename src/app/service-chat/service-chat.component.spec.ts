import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChatComponent } from './service-chat.component';

describe('ServiceChatComponent', () => {
  let component: ServiceChatComponent;
  let fixture: ComponentFixture<ServiceChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
