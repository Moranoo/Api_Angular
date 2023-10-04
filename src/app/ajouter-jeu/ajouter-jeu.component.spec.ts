import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJeuComponent } from './ajouter-jeu.component';

describe('AjouterJeuComponent', () => {
  let component: AjouterJeuComponent;
  let fixture: ComponentFixture<AjouterJeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterJeuComponent]
    });
    fixture = TestBed.createComponent(AjouterJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
