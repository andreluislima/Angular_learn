import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributBindingComponent } from './attribut-binding.component';

describe('AttributBindingComponent', () => {
  let component: AttributBindingComponent;
  let fixture: ComponentFixture<AttributBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
