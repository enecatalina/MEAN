import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaGoldComponent } from './ninja-gold.component';

describe('NinjaGoldComponent', () => {
  let component: NinjaGoldComponent;
  let fixture: ComponentFixture<NinjaGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
