import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectSpotComponent } from './perfect-spot.component';

describe('PerfectSpotComponent', () => {
  let component: PerfectSpotComponent;
  let fixture: ComponentFixture<PerfectSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfectSpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfectSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
