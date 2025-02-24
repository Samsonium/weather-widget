export interface Position {
  coords: Coords
  timestamp: number
}

interface Coords {
  accuracy: number
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  latitude: number
  longitude: number
  speed: number | null
}
