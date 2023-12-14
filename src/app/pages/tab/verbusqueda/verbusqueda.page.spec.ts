import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerbusquedaPage } from './verbusqueda.page';

describe('VerbusquedaPage', () => {
  let component: VerbusquedaPage;
  let fixture: ComponentFixture<VerbusquedaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(VerbusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
