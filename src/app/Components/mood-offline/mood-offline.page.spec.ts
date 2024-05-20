import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoodOfflinePage } from './mood-offline.page';

describe('MoodOfflinePage', () => {
  let component: MoodOfflinePage;
  let fixture: ComponentFixture<MoodOfflinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodOfflinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
