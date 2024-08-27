import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinteractionComponent } from './createinteraction.component';

describe('CreateinteractionComponent', () => {
  let component: CreateinteractionComponent;
  let fixture: ComponentFixture<CreateinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateinteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
