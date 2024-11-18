import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateleadComponent } from './createlead.component';

describe('CreateleadComponent', () => {
  let component: CreateleadComponent;
  let fixture: ComponentFixture<CreateleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateleadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
