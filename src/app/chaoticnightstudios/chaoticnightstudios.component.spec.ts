import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaoticnightstudiosComponent } from './chaoticnightstudios.component';

describe('ChaoticnightstudiosComponent', () => {
  let component: ChaoticnightstudiosComponent;
  let fixture: ComponentFixture<ChaoticnightstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaoticnightstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaoticnightstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
