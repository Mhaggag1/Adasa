import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Natutre } from './natutre';

describe('Natutre', () => {
  let component: Natutre;
  let fixture: ComponentFixture<Natutre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Natutre],
    }).compileComponents();

    fixture = TestBed.createComponent(Natutre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
