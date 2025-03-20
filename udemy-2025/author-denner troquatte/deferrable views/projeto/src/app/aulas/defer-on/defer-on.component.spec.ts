import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOnComponent } from './defer-on.component';

describe('DeferOnComponent', () => {
  let component: DeferOnComponent;
  let fixture: ComponentFixture<DeferOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
