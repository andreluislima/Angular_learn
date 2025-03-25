import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferIntroducaoComponent } from './defer-introducao.component';

describe('DeferIntroducaoComponent', () => {
  let component: DeferIntroducaoComponent;
  let fixture: ComponentFixture<DeferIntroducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferIntroducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferIntroducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
