import { damageLabelPrettier } from 'lib/damage/damage';
import { formLabelPrettier } from 'lib/description/description';

export type IFormContext = typeof formLabelPrettier;

// export type IFormContext = {
//   make: string;
//   model: string;
//   subModel: string;
//   year: string;
//   finish: string;
//   finishType: string;
//   countryOfOrigin: string;
//   serial: string;
//   condition: string;
//   weight: string;
//   bodyType: string;
//   bodyShape: string;
//   bodyWood: string;
//   topWood: string;
//   scaleLength: string;
//   neckJoint: string;
//   neckWood: string;
//   neckFinish: string;
//   fingerBoard: string;
//   radius: string;
//   neckProfile: string;
//   neckThickness_1: string;
//   neckThickness_12: string;
//   inlays: string;
//   nutWidth: string;
//   nut: string;
//   frets: string;
//   pickupConfiguration: string;
//   pickupNeck: string;
//   pickupMiddle: string;
//   pickupBridge: string;
//   pickguard: string;
//   pots: string;
//   coilTap: string;
//   pickupSwitch: string;
//   phaseSwitch: string;
//   killSwitch: string;
//   hardware: string;
//   strapButtons: string;
//   tuningMachineBrands: string;
//   tuningMachineModels: string;
//   tuningMachineHeads: string;
//   bridge: string;
//   knobs: string;
//   modifications: string;
//   otherFeatures: string;
//   stringGauge: string;
//   guitarCase: string;
// };

export type IDamageAreas = typeof damageLabelPrettier;

// export type IDamageAreas = {
//   overallCondition: string;
//   fretLife: string;
//   headstockFront: string;
//   headstockBack: string;
//   fretboard: string;
//   neckBack: string;
//   neckBinding: string;
//   neckPocket: string;
//   bodyFront: string;
//   bodyBack: string;
//   bodyBinding: string;
//   pickups: string;
//   bridge: string;
//   tailpiece: string;
//   knobs: string;
//   hardware: string;
// };

export type IDamageContext = {
  rating: IDamageAreas;
  description: IDamageAreas;
};
