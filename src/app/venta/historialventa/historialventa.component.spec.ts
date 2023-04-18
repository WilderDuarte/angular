import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialventaComponent } from './historialventa.component';

describe('HistorialventaComponent', () => {
  let component: HistorialventaComponent;
  let fixture: ComponentFixture<HistorialventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
