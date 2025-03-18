import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributeBindingComponent } from './atribute-binding.component';

describe('AtributeBindingComponent', () => {
  let component: AtributeBindingComponent;
  let fixture: ComponentFixture<AtributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtributeBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
