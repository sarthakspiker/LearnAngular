import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPredefinedPipesComponent } from './test-predefined-pipes.component';

describe('TestPredefinedPipesComponent', () => {
  let component: TestPredefinedPipesComponent;
  let fixture: ComponentFixture<TestPredefinedPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPredefinedPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPredefinedPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
