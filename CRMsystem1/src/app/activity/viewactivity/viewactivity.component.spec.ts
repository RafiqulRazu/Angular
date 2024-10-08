import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewactivityComponent } from './viewactivity.component';

describe('ViewactivityComponent', () => {
  let component: ViewactivityComponent;
  let fixture: ComponentFixture<ViewactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewactivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
