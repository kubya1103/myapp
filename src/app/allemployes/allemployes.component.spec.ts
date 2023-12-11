import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllemployesComponent } from './allemployes.component';

describe('AllemployesComponent', () => {
  let component: AllemployesComponent;
  let fixture: ComponentFixture<AllemployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllemployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllemployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
