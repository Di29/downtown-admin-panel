import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionUpsertComponent } from './suggestion-upsert.component';

describe('SuggestionUpsertComponent', () => {
  let component: SuggestionUpsertComponent;
  let fixture: ComponentFixture<SuggestionUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
