import { provideHttpClient } from '@angular/common/http';

export interface ConversionResponse {
  result: string
  documentation: string
  terms_of_use: string
  time_last_update_unix: number
  time_last_update_utc: string
  time_next_update_unix: number
  time_next_update_utc: string
  base_code: string
  target_code: string
  conversion_rate: number
  conversion_result: number
}
export interface Convert {
  from: Currency,
  to: Currency,
  amount: number
}

export interface Currency {
  CurrencyCode: string;
  CurrencyName: string;
  Country: String;
}


export interface ResultConvert {
  convert: Convert,
  priceConverted: number,
  result: number,
  form: string,
  date: Date,
}

export interface OffConvert {
  fromOff: OffCurrency,
  toOff: OffCurrency,
  amountOff: number
}
export interface OffCurrency {
  currency: Currency;
  priceToDOP: number
}
