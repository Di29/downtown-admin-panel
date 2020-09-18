import { TestBed } from '@angular/core/testing';

import { ServiceChatService } from './service-chat.service';

describe('ServiceChatService', () => {
  let service: ServiceChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
