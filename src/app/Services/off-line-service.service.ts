import { Currency, OffCurrency } from '@Interfaces/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffLineServiceService {

  private _AllCurrencyOff: OffCurrency[] = [
    { currency: { CurrencyCode: "DOP", CurrencyName: "Dominican Peso", Country: "Dominican Republic" }, priceToDOP: 1 },
    { currency: { CurrencyCode: "USD", CurrencyName: "United States Dollar", Country: "United States" }, priceToDOP: 58.85 },
    { currency: { CurrencyCode: "EUR", CurrencyName: "Euro", Country: "European Union" }, priceToDOP: 62.5 },
    { currency: { CurrencyCode: "COP", CurrencyName: "Colombian Peso", Country: "Colombia" }, priceToDOP: 0.015 },
  ]

  get getAllCurencyOff() {
    return this._AllCurrencyOff;
  }
}
