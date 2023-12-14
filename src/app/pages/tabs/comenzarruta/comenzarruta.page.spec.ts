import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComenzarrutaPage } from './comenzarruta.page';

describe('ComenzarrutaPage', () => {
  let component: ComenzarrutaPage;
  let fixture: ComponentFixture<ComenzarrutaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ComenzarrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
