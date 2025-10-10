import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleStoryComponent } from './couple-story.component';

describe('CoupleStoryComponent', () => {
  let component: CoupleStoryComponent;
  let fixture: ComponentFixture<CoupleStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupleStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupleStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
