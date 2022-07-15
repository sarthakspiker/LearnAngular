import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmployeeTableComponent } from './test-employee-table.component';

describe('TestEmployeeTableComponent', () => {
  let component: TestEmployeeTableComponent;
  let fixture: ComponentFixture<TestEmployeeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEmployeeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmployeeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
