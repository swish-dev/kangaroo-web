export interface IDriverInfo {
  id: number
  name: string
  age: number
  averageSpeed: number
  mbti?: string
  crimeHistory: Array<{ time: string; type: string }>
  car: {
    name: string
    year: Date
  }
}
