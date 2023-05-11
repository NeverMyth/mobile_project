import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharmanderPage } from './charmander.page';

describe('CharmanderPage', () => {
  let component: CharmanderPage;
  let fixture: ComponentFixture<CharmanderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharmanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
