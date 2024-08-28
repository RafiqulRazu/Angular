import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinteractionComponent } from './updateinteraction.component';

describe('UpdateinteractionComponent', () => {
  let component: UpdateinteractionComponent;
  let fixture: ComponentFixture<UpdateinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateinteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
