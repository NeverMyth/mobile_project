import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SquirtlePage } from './squirtle.page';

describe('SquirtlePage', () => {
  let component: SquirtlePage;
  let fixture: ComponentFixture<SquirtlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SquirtlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
