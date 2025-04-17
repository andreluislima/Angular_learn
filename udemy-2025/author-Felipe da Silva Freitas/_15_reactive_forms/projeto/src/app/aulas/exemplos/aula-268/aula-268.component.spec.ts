import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula268Component } from './aula-268.component';

describe('Aula268Component', () => {
  let component: Aula268Component;
  let fixture: ComponentFixture<Aula268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula268Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
