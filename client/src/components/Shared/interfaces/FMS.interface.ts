export interface IFMSReport {
  driverId: number
  timestamp: string
  speed: number
  breakPos: number
  breakStatus: 'BAD' | 'GOOD ' | 'GREAT'
  externalLampStatus: boolean
  accelPedalPos: number
  batterSupplyVoltage: number
}
