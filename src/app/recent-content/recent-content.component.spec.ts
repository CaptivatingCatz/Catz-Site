import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentContentComponent } from './recent-content.component';

describe('RecentShortsComponent', () => {
  let component: RecentContentComponent;
  let fixture: ComponentFixture<RecentContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentContentComponent]
    });
    fixture = TestBed.createComponent(RecentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
