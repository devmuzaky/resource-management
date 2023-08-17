import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceWorkingHoursComponent } from './resource-working-hours.component';

describe('ResourceWorkingHoursComponent', () => {
  let component: ResourceWorkingHoursComponent;
  let fixture: ComponentFixture<ResourceWorkingHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceWorkingHoursComponent]
    });
    fixture = TestBed.createComponent(ResourceWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
