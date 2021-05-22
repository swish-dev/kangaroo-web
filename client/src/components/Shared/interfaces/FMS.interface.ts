export interface IFMSReport {
  driverId: string
  timestamp: string
  speed: number
  brakePedalPos: number
  brakeStatus: string
  externalLampStatus: boolean
  accelPedalPos: number
  batterySupplyVoltage: number
}
