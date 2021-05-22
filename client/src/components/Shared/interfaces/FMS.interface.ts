export interface IFMSReport {
  driverId: string
  timestamp: string
  speed: number
  brakePos: number
  brakeStatus: string
  externalLampStatus: boolean
  accelPedalPos: number
  batterSupplyVoltage: number
}
