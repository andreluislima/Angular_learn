import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoxoBtnComponent } from './card-roxo-btn.component';

describe('CardRoxoBtnComponent', () => {
  let component: CardRoxoBtnComponent;
  let fixture: ComponentFixture<CardRoxoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRoxoBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoxoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
