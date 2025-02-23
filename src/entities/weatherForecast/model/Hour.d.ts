export interface Hour {
  chance_of_rain: number
  chance_of_snow: number
  cloud: number
  condition: Condition
  dewpoint_c: number
  dewpoint_f: number
  feelslike_c: number
  feelslike_f: number
  gust_kph: number
  gust_mph: number
  heatindex_c: number
  heatindex_f: number
  humidity: number
  is_day: 0 | 1
  precip_in: number
  precip_mm: number
  pressure_in: number
  pressure_mb: number
  snow_cm: number
  temp_c: number
  temp_f: number
  time: string
  time_epoch: number
  uv: number
  vis_km: number
  vis_miles: number
  will_it_rain: number
  will_it_snow: number
  wind_degree: number
  wind_dir: string
  wind_kph: number
  wind_mph: number
  windchill_c: number
  windchill_f: number
}

interface Condition {
  code: number
  icon: string
  text: string
}
