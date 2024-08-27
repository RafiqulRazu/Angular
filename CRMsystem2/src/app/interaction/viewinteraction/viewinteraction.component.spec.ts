import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinteractionComponent } from './viewinteraction.component';

describe('ViewinteractionComponent', () => {
  let component: ViewinteractionComponent;
  let fixture: ComponentFixture<ViewinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewinteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
