import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulbasaurPage } from './bulbasaur.page';

describe('BulbasaurPage', () => {
  let component: BulbasaurPage;
  let fixture: ComponentFixture<BulbasaurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BulbasaurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
