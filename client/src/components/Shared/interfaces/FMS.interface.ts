export interface IFMSReport {
  driverId: string
  timestamp: string
  speed: number
  breakPos: number
  breakStatus: 'BAD' | 'GOOD ' | 'GREAT'
  externalLampStatus: boolean
  accelPedalPos: number
  batterSupplyVoltage: number
}
