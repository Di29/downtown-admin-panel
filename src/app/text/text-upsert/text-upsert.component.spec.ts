import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextUpsertComponent } from './text-upsert.component';

describe('TextUpsertComponent', () => {
  let component: TextUpsertComponent;
  let fixture: ComponentFixture<TextUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
