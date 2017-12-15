import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaGoldReviewComponent } from './ninja-gold-review.component';

describe('NinjaGoldReviewComponent', () => {
  let component: NinjaGoldReviewComponent;
  let fixture: ComponentFixture<NinjaGoldReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaGoldReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaGoldReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
