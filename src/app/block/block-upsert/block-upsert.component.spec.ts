import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUpsertComponent } from './block-upsert.component';

describe('BlockUpsertComponent', () => {
  let component: BlockUpsertComponent;
  let fixture: ComponentFixture<BlockUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
