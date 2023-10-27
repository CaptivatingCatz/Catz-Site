import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAssetsObservatoryComponent } from './digital-assets-observatory.component';

describe('DigitalAssetsObservatoryComponent', () => {
  let component: DigitalAssetsObservatoryComponent;
  let fixture: ComponentFixture<DigitalAssetsObservatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalAssetsObservatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAssetsObservatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
