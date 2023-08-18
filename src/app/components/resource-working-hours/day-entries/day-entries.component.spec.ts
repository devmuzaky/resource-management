import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayEntriesComponent } from './day-entries.component';

describe('DayEntriesComponent', () => {
  let component: DayEntriesComponent;
  let fixture: ComponentFixture<DayEntriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayEntriesComponent]
    });
    fixture = TestBed.createComponent(DayEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
