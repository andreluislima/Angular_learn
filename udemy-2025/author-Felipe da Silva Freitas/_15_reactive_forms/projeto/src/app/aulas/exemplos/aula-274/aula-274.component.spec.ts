import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula274Component } from './aula-274.component';

describe('Aula274Component', () => {
  let component: Aula274Component;
  let fixture: ComponentFixture<Aula274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula274Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
