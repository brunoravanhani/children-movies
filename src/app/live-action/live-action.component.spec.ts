import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveActionComponent } from './live-action.component';

describe('LiveActionComponent', () => {
  let component: LiveActionComponent;
  let fixture: ComponentFixture<LiveActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
