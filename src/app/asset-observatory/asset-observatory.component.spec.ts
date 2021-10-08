import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetObservatoryComponent } from './asset-observatory.component';

describe('AssetObservatoryComponent', () => {
  let component: AssetObservatoryComponent;
  let fixture: ComponentFixture<AssetObservatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetObservatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetObservatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
