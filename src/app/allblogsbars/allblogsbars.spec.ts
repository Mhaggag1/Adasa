import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allblogsbars } from './allblogsbars';

describe('Allblogsbars', () => {
  let component: Allblogsbars;
  let fixture: ComponentFixture<Allblogsbars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allblogsbars],
    }).compileComponents();

    fixture = TestBed.createComponent(Allblogsbars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
