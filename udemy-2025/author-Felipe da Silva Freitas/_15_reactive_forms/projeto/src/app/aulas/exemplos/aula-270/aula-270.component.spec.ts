import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula270Component } from './aula-270.component';

describe('Aula270Component', () => {
  let component: Aula270Component;
  let fixture: ComponentFixture<Aula270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula270Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
