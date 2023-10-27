import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPanelComponent } from './social-panel.component';

describe('SocialPanelComponent', () => {
  let component: SocialPanelComponent;
  let fixture: ComponentFixture<SocialPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialPanelComponent]
    });
    fixture = TestBed.createComponent(SocialPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
