import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertCurrencyPage } from './convert-currency.page';

describe('ConvertCurrencyPage', () => {
  let component: ConvertCurrencyPage;
  let fixture: ComponentFixture<ConvertCurrencyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertCurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
