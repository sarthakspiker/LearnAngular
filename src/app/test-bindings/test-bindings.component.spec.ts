import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBindingsComponent } from './test-bindings.component';

describe('TestBindingsComponent', () => {
  let component: TestBindingsComponent;
  let fixture: ComponentFixture<TestBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
