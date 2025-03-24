import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBtnCancelComponent } from './card-btn-cancel.component';

describe('CardBtnCancelComponent', () => {
  let component: CardBtnCancelComponent;
  let fixture: ComponentFixture<CardBtnCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBtnCancelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBtnCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
