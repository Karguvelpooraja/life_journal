import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCarouselComponent } from './kids-carousel.component';

describe('KidsCarouselComponent', () => {
  let component: KidsCarouselComponent;
  let fixture: ComponentFixture<KidsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
