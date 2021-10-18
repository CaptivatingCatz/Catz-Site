import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CatzNFTComponent } from './catz-nft.component';

describe('CatzNFTComponent', () => {
  let component: CatzNFTComponent;
  let fixture: ComponentFixture<CatzNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatzNFTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatzNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
