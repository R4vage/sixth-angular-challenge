import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVehicleComponent } from './single-vehicle.component';

describe('SingleVehicleComponent', () => {
  let component: SingleVehicleComponent;
  let fixture: ComponentFixture<SingleVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
