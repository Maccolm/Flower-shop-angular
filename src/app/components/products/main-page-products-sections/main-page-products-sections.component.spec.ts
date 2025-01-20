import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProductsSectionsComponent } from './main-page-products-sections.component';

describe('MainPageProductsSectionsComponent', () => {
  let component: MainPageProductsSectionsComponent;
  let fixture: ComponentFixture<MainPageProductsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageProductsSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageProductsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
