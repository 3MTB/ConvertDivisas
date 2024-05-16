
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
  from: string,
  to: string,
  amount: number
}

