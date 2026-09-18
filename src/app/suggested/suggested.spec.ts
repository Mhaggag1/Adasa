import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suggested } from './suggested';

describe('Suggested', () => {
  let component: Suggested;
  let fixture: ComponentFixture<Suggested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suggested],
    }).compileComponents();

    fixture = TestBed.createComponent(Suggested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
