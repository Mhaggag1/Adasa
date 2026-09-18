import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newest } from './newest';

describe('Newest', () => {
  let component: Newest;
  let fixture: ComponentFixture<Newest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newest],
    }).compileComponents();

    fixture = TestBed.createComponent(Newest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
