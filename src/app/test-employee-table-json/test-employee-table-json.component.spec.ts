import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmployeeTableJsonComponent } from './test-employee-table-json.component';

describe('TestEmployeeTableJsonComponent', () => {
  let component: TestEmployeeTableJsonComponent;
  let fixture: ComponentFixture<TestEmployeeTableJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEmployeeTableJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmployeeTableJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
